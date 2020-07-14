import {Component, OnInit} from '@angular/core';
import {environment} from '../environments';
import { Const } from 'environments/const';
import {I18nService} from '@Services/i18n.service';
import {Logger} from '@Services/logger.service';

declare var $: any;

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
      Const.defaultLanguage,
      Const.supportedLanguages
    );
  }
}
