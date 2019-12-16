import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {I18nService} from './core/services/i18n.service';
import {Logger} from './core/services/logger.service';

/** Initialize Logger */
const log = new Logger('app.component');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'baobab-client';

  constructor(private i18nService: I18nService) { }

  ngOnInit() {
    if (environment.production) {
      Logger.enableProductionMode();
    }
    log.debug('init');

    // Setup translations
    this.i18nService.init(
      environment.defaultLanguage,
      environment.supportedLanguages
    );
  }
}
