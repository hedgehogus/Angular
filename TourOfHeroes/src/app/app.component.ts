import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details</h2>
  <div><label> id:</label>{{hero.id}}</div>
  <div>
    <label> name:</label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour Of Heroes';
  hero: Hero = {
    id:1,
    name: "Winstorm"
  } ;
}

export class Hero {
  id: number;
  name: string;
}