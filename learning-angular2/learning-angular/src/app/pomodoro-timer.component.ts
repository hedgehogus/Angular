import { Component } from '@angular/core';

@Component({
    selector: 'pomodoro-timer',
    template: `<h1> {{ minutes }}:{{ seconds }} </h1>`
})

export class PomodoroTimerComponent {
    minutes: number;
    seconds: number;

    constructor() {
        this.minutes = 24;
        this.seconds = 59;
        // interval timer
        setInterval(()=> this.tick(), 1000);

    }

    tick():void {
        if (--this.seconds < 0) {
            this.seconds = 59;
            if (-- this.minutes < 0){
                this.minutes = 24;
                this.seconds = 59;
            }
        }
    }
}