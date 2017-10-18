//import { CARPARTS } from './mocks';
import { CarPart } from './car-part'
import { Injectable } from '@angular/core';

import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable() // dont forget the parentheses
export class RacingDataService {

    constructor(private http: Http){}

    getCarParts(){
        //return CARPARTS;

        //get returns observable instead of promise
        // observable give us additional functionality on our http calls
        // one of which is to treat the return value like an array
        return this.http.get('app/car-parts.json').map(response => <CarPart[]> response.json().data);
    }
}