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
  } ;
  pomodoros: number = 0;
  pomodorosWarningMapping: any = {
    '=0': 'No pomodoros for today',
    '=1': 'One pomodoro pending',
    'other': '# pomodoros pending'
  } ;
  languageCode: string = 'fr';
  localizedLabelsMap: any = {
    'en': 'Start timer',
    'es': 'Comenzar temporizador',
    'fr': 'Demarrer une sequence',
    'other': 'Start timer'
}

  constructor() { }

  ngOnInit() {
  }

}
