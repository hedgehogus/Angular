import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greeting: string;

  constructor() {
    this.greeting = 'Hello Angular 2!';
  } 
}
