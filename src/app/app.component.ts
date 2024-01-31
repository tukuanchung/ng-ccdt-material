import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TaiwanDateAdapter } from './TaiwanDateAdapter';


@Component({
  selector: 'app-root',
  standalone: true,
  providers: [provideNativeDateAdapter(),
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'zh-TW'
    },
    {
      provide: DateAdapter,
      useClass: TaiwanDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: 'tYY/MM/DD',
        },
        display: {
          dateInput: 'tYY/MM/DD',
          monthYearLabel: 'tYY MMM',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'tYY MMMM',
        },
      }
    }],
    imports: [RouterOutlet, MatFormFieldModule,
      TranslateModule,
      MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  translate = inject(TranslateService);

  title = 'ng-ccdt-material'
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
