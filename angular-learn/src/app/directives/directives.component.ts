import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  someValue: number = 3;
  someArray: string[] = ["hedgehog", "hedgie", "hoglet"] ;

  constructor() { }

  ngOnInit() {
  }

}
