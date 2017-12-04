import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  someString: string = "Hedgehogs Are here"
  someNumber: number = 23487854/233432435;
  someDate: Date = new Date();
  someObj: Object = {
    name:'Eve',
    age: 43
  } 

  constructor() { }

  ngOnInit() {
  }

}
