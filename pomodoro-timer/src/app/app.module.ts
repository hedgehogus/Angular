import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimerWidgetComponent } from './timer/timer-widget.component';
import { TaskIconsComponent } from './tasks/task-icons.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerWidgetComponent,
    TaskIconsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
