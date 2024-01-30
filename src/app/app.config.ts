import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations, provideNoopAnimations} from '@angular/platform-browser/animations';
// 關掉動畫，讓component正常運作
// import {provideNoopAnimations} from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimations(),
    // provideNoopAnimations(),
  ],

};
