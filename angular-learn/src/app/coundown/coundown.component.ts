import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coundown',
  templateUrl: './coundown.component.html',
  styleUrls: ['./coundown.component.css']
})
export class CoundownComponent implements OnInit {
  @Input() seconds: number;
  intervalId: any;

  constructor() { 
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  ngOnInit() {
  }

  private tick(): void {
    if (--this.seconds < 1) {
      clearInterval(this.intervalId);
    }
  }
}
