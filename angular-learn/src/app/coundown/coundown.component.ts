import { Component, OnInit, Input, Output, EventEmitter,ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-coundown',
  templateUrl: './coundown.component.html',
  //styleUrls: ['./coundown.component.css']
  styles: ['h1 { color: #900 }'],
  encapsulation: ViewEncapsulation.Emulated
   // alternative syntax, not recommended
  // inputs:['seconds'],
  // outputs: ['complete', 'progress']
})
export class CoundownComponent implements OnInit {
  @Input() seconds: number;
  intervalId: any;
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() progress: EventEmitter<number> = new EventEmitter();

  constructor() { 
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  ngOnInit() {
  }

  private tick(): void {
    if (--this.seconds < 1) {
      clearInterval(this.intervalId);

      this.complete.emit(null);
    }

    this.progress.emit(this.seconds);
  }
}
