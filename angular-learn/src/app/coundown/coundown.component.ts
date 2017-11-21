import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coundown',
  templateUrl: './coundown.component.html',
  styleUrls: ['./coundown.component.css']
})
export class CoundownComponent implements OnInit {
  seconds: number = 25;
  intervalld: number;

  constructor() { 
    this.intervalld = setlnterval(() => this.tick(), 1000);
  }

  ngOnInit() {
  }

  private tick(): void {
    if (--this.seconds < 1) {
      clearlnterval(this.intervalld);
    }
}

}
