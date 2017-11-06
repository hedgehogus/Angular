import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular',
  template: `<h1> {{greeting}} </h1>
    <pomodoro-timer></pomodoro-timer>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greeting: string;

  constructor() {
    this.greeting = 'Hello Angular 2!';
  } 
}
