import { Component } from '@angular/core';
import { CarPart } from './car-part'
import { CARPARTS } from './mocks'
import { RacingDataService } from './racing-data.service'

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})

export class CarPartsComponent { 
    // tells TypeScript to treat this like an array of CarParts
    carParts: CarPart[] ;

    // injecting the dependency
    // constructor for this component
    // private - means TypeScript automatically defines component properties
    // based on the parameters
    constructor(private racingDataService: RacingDataService){};

    ngOnInit() {
      
      this.racingDataService.getCarParts()
                    .subscribe(carParts => this.carParts = carParts);
    };
    // ngOnInit is invoked after the component is constructed and is the best place to initialize 
    // property values
    
    upQuantity(carPart){
      if (carPart.quantity < carPart.inStock){
         carPart.quantity++;
      }
    }

    downQuantity(carPart){
      if (carPart.quantity !== 0){
         carPart.quantity--;
      }
    }

    showKey(event){
      console.log(event);
    }

    getCoord(event, carPart){
      console.log(carPart.name + " " + event.clientX + " ," + event.clientY);
    }
    
    totalCarParts(){
      // let sum = 0;
      // for (let carPart of this.carParts){
      //   sum += carPart.inStock;
      // }
      // return sum;

      // return this.carParts.reduce(function(prev,current){return prev + current.inStock;}, 0);

      // totalCost(){
      // return this.races.reduce(funtion(a,b){return a + (b.isRacing? b.entryFee, 0)}, 0);
  
  
      if(Array.isArray(this.carParts)){
        return this.carParts.reduce((prev,current) => prev + current.inStock, 0);
      }
    }
}
