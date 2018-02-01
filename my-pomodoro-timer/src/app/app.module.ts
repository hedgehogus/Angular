import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PomodoroTasksComponent } from './pomodoro-tasks/pomodoro-tasks.component';
import { IconsComponent } from './icons/icons.component';
import { FormattedTimePipe, QueuedOnlyPipe} from "./formattedTimePipe"
import { TaskTooltipDirective } from './pomodoro-tasks/task-tooltip.directive';

import { SharedModule } from './shared/shared.module';
import { AsyncComponent } from './async/async.component';


@NgModule({
  declarations: [
    AppComponent,
    PomodoroTasksComponent,
    IconsComponent,
    FormattedTimePipe,
    QueuedOnlyPipe,
    TaskTooltipDirective,
    AsyncComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
