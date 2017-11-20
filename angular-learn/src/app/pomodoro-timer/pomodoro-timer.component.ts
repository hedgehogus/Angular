import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent implements OnInit {
    minutes: number;
    seconds: number;
    isPaused: boolean;
    buttonLabel: string;

    constructor() {
        this.resetPomodoro();
        // interval timer
        setInterval(()=> this.tick(), 1000);
    }

    resetPomodoro(): void {
        this.minutes = 25;
        this.seconds = 0;
        this.buttonLabel = 'start';
        this.togglePause();
    }

    private tick():void {
        if (!this.isPaused){
            this.buttonLabel = 'Pause';
            if (--this.seconds < 0) {
                this.seconds = 59;
                if (-- this.minutes < 0){
                    this.resetPomodoro();
                }
            }
        }
    }

    togglePause(): void {
        this.isPaused = !this.isPaused;
        if (this.minutes < 25 /*|| this.seconds > 0*/) {
            this.buttonLabel = this.isPaused ? 'Resume': 'Pause';
        }
    }
      
  ngOnInit() {
  }

}
