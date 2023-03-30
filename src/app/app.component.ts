import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora de Horas';
  hours: Date[] = [new Date(), new Date()];
  hour: number = 0;
  minute: number = 0;

  ngOnInit() {
    this.hours.forEach(hour => hour.setHours(0, 0, 0, 0))
  }

  addHour() {
    let newHour = new Date().setHours(0, 0, 0, 0)
    this.hours.push(new Date(newHour))
  }

  sumHours() {
    let totalHours = 0;
    let totalMinutes = 0;
    for (let hour of this.hours) {
      if (hour) {
        totalHours += hour.getHours();
        totalMinutes += hour.getMinutes();
        if (totalMinutes >= 60) {
          totalHours += 1
          totalMinutes -= 60
        }
      }
    }
    this.hour = totalHours
    this.minute = totalMinutes
  }
}
