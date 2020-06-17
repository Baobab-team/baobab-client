import { writeFile } from 'fs';

const colors = require('colors');
require('dotenv').config();

const environment = process.env.ENVIRONMENT;
let apiURL;
let targetPath;

if (environment === 'staging') {
  apiURL = process.env.BASEAPIURL_STAGING;
  targetPath = `./src/environments/environment.staging.ts`;
} else if (environment === 'dev') {
 apiURL = process.env.BASEAPIURL_DEV;
 targetPath = `./src/environments/environment.ts`;
}

const envConfigFile = `
export const environment = {
  production: ${process.env.PRODUCTION},
  baseApiUrl: '${apiURL}',
  apiVersion: 'api_v1',
  paths_api: {
    businesses: 'businesses',
    categories: 'categories',
    autocomplete: 'autocomplete',
  },
  defaultLanguage: 'fr',
  supportedLanguages: ['fr', 'en'],
};
`;

console.log(colors.magenta('The file `environment.' + environment + '.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));

writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
      throw console.error(err);
  } else {
      console.log(colors.magenta(`Angular environment.${environment}.ts file generated correctly at ${targetPath} \n`));
  }
});
