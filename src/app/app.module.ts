import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OnlyNumbersDirective } from './only-numbers.directive';

@NgModule({
  declarations: [
    AppComponent,
    OnlyNumbersDirective
  ],
  imports: [
    BrowserModule,
    TimepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
