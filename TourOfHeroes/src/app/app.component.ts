import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>    
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>  
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Tour Of Heroes';
  heroes:Hero[];
  selectedHero: Hero;


  constructor(private heroService: HeroService) { }

  getHeroes():void{
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


