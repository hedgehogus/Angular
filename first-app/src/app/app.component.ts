import { Component } from '@angular/core';

  //  ngFor - is a structural directive
  // carPar - is a local variable
  // carParts is the array to loop through

@Component({
  selector: 'app-root',
  template: `  
    <h1>{{title}}</h1>    
    <ul>      
      <li *ngFor="let carPart of carParts">
        <h2>{{carPart.name}}</h2>
        <p>{{carPart.description}}</p>
        <p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in Stock</p>
        <p *ngIf="carPart.inStock === 0">Out of Stock</p>
      </li>
    </ul>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ultra Racing';
  carParts = [{
        "id":1,
        "name":"super Tires",
        "description":"these tires are the very best",
        "inStock":5
    },
    {
        "id":2,
        "name":"Reinforced Shoks",
        "description":"these tires are the very best",
        "inStock":4
    },
    {
        "id":3,
        "name":"super Hedgehogs",
        "description":"these Hedgehogs are hoglets",
        "inStock":0
    }]
}
