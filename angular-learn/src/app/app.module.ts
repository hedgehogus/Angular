import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PomodoroTimerComponent } from './pomodoro-timer/pomodoro-timer.component';
import { CoundownComponent } from './coundown/coundown.component';


@NgModule({
  declarations: [
    AppComponent,
    PomodoroTimerComponent,
    CoundownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
