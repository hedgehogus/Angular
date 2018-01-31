import { Component, OnInit } from '@angular/core';
import {TaskIconsComponent} from './task-icons.component';
import {UnderlineDirective} from './task-underline.directive';
import { TaskService, SettingsService, Task, SHARED_PIPES} from '../shared/shared';

@Component({
  selector: 'pomodoro-tasks',  
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  
})
export class TasksComponent implements OnInit {
  today: Date;
  tasks: Task[];
  queuedPomodoros: number;
  queueHeaderMapping: any;
  timerMinutes: number;

  constructor(private taskService: TaskService, private settingsService: SettingsService) {
    this.tasks = this.taskService.taskStore;
    this.today = new Date();
    this.queueHeaderMapping = settingsService.pluralsMap.tasks;
    this.timerMinutes = settingsService.timerMinutes;
  }

  ngOnInit() {
    this.updateQueuedPomodoros();
  }

  toggleTask(task: Task): void {
    task.queued = !task.queued;
    this.updateQueuedPomodoros();
  }

  private updateQueuedPomodoros(): void {
    this.queuedPomodoros = this.tasks
      .filter ((task: Task) => task.queued)
      .reduce((pomodoros: number, queuedTask: Task) => {
          return pomodoros + queuedTask.pomodorosRequired;
      }, 0 );
  }
}
