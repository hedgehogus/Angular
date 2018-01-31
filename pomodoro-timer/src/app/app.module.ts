import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimerWidgetComponent } from './timer/timer-widget.component';
import { TaskIconsComponent } from './tasks/task-icons.component';
import { TasksComponent } from './tasks/tasks.component';

import { SHARED_PIPES, SHARED_PROVIDERS } from './shared/shared';
import { TasksModule } from './tasks/tasks.module';


@NgModule({
  declarations: [
    AppComponent,
    TimerWidgetComponent,
    TaskIconsComponent,
    TasksComponent,
    SHARED_PIPES
  ],
  imports: [
    BrowserModule,
    TasksModule
  ],
  providers: [SHARED_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
