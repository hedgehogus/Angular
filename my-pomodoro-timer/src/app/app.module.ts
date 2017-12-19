import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PomodoroTasksComponent } from './pomodoro-tasks/pomodoro-tasks.component';
import { IconsComponent } from './icons/icons.component';
import { FormattedTimePipe, QueuedOnlyPipe} from "./formattedTimePipe"
import { TaskTooltipDirective } from './pomodoro-tasks/task-tooltip.directive';


@NgModule({
  declarations: [
    AppComponent,
    PomodoroTasksComponent,
    IconsComponent,
    FormattedTimePipe,
    QueuedOnlyPipe,
    TaskTooltipDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
