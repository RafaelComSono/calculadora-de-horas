import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
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
