import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PomodoroTasksComponent } from './pomodoro-tasks/pomodoro-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    PomodoroTasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
