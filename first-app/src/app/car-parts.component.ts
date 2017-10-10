import { Component } from '@angular/core';

@Component({
  selector: 'car-parts',
  template: `  
    <p> There are {{totalCarParts()}} total parts in stock.</p> 
    <ul>      
      <li *ngFor="let carPart of carParts">
        <h2>{{carPart.name | uppercase}}</h2>
        <p>{{carPart.description}}</p>
        <p>{{carPart.price | currency:'EUR':true}}</p>
        <p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in Stock</p>
        <p *ngIf="carPart.inStock === 0">Out of Stock</p>
      </li>
    </ul>`,
  styleUrls: ['./app.component.css']
})

export class CarPartsComponent { 
  carParts = [{
        "id":1,
        "name":"super Tires",
        "description":"these tires are the very best",
        "inStock":5,
        "price": 4.99
    },
    {
        "id":2,
        "name":"Reinforced Shoks",
        "description":"these tires are the very best",
        "inStock":4,
        "price": 9.99
    },
    {
        "id":3,
        "name":"super Hedgehogs",
        "description":"these Hedgehogs are hoglets",
        "inStock":0,
        "price": 6.99
    }];

    // inside a TypeScriptt class we dont use the word "function",
    // just like we don't use "let" to declare the properties

    totalCarParts(){
      // let sum = 0;
      // for (let carPart of this.carParts){
      //   sum += carPart.inStock;
      // }
      // return sum;

      // return this.carParts.reduce(function(prev,current){return prev + current.inStock;}, 0);

      // totalCost(){
      // return this.races.reduce(funtion(a,b){return a + (b.isRacing? b.entryFee, 0)}, 0);
  
  

      return this.carParts.reduce((prev,current) => prev + current.inStock, 0);
    }
}
