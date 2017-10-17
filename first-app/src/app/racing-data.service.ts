import { CARPARTS } from './mocks';
import { Injectable } from '@angular/core';

@Injectable() // dont forget the parentheses
export class RacingDataService {
    getCarParts(){
        return CARPARTS;
    }
}