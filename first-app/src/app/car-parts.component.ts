import { Component } from '@angular/core';
import { CarPart } from './car-part'
import { CARPARTS } from './mocks'

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})

export class CarPartsComponent { 
    // tells TypeScript to treat this like an array of CarParts
    carParts: CarPart[] ;

    ngOnInit() {
        this.carParts = CARPARTS;
    }
    // ngOnInit is onvoced after the component is constructed and is the best place to initialize 
    // property values
    
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
