export class CarPart{
    id: number;
    name: string;
    description: string;
    inStock: number;    
    price: number;
    image: string;
    featured: boolean;
    quantity: number;
}
// we are declaring what type each of our properties are
// this will allow our compiler to check our code and ensure
// we're getting and setting things properly
// this is TypeScript
