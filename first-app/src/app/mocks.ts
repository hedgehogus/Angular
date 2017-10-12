import { CarPart } from './car-part'

export const CARPARTS: CarPart [] = [{
        "id":1,
        "name":"super Tires",
        "description":"these tires are the very best",
        "inStock":5,        
        "price": 4.99,
        "image":"/images/hedgehog1.jpg"
    },
    {
        "id":2,
        "name":"Reinforced Shoks",
        "description":"these tires are the very best",
        "inStock":4,        
        "price": 9.99,
        "image":"./images/hedgehog2.jpg"
    },
    {
        "id":3,
        "name":"super Hedgehogs",
        "description":"these Hedgehogs are hoglets",
        "inStock":0,        
        "price": 6.99,
        "image":"./images/hedgehog3.jpg"
    }];

    // inside a TypeScript class we dont use the word "function",
    // just like we don't use "let" to declare the properties
