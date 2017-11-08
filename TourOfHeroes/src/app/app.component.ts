import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>   
  <app-heroes></app-heroes>
  <app-messages></app-messages>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Tour Of Heroes';
  
  constructor() { }

  ngOnInit(): void {  }
  
}


