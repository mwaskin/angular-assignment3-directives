import { Component } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayDetails: boolean = false;
  buttonText: string = this.displayDetails ? 'Hide Details' : 'Display Details';
  // clickCount: number = 0;
  clickLog = [];

  onButtonClick() {
    // this.clickCount += 1;
    this.displayDetails = !this.displayDetails;
    this.clickLog.push(new Date());
  }
}
