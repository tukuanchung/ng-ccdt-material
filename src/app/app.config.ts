import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';

import localeName from '@angular/common/locales/zh-Hant';
import localNameExtra from '@angular/common/locales/extra/zh-Hant';
registerLocaleData(localeName, localNameExtra);



import { routes } from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

// 關掉動畫，讓component正常運作
// import {provideNoopAnimations} from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimations(),
    // provideNoopAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
        defaultLanguage: 'zh-tw',
      })
    ),
    {provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: {dateFormat: 'full'}},
    {provide: LOCALE_ID,useValue: 'zh-Hant'},
  ],

};
