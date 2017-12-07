import { Component, OnInit, Input, Pipe, PipeTransform, Directive, HostListener } from '@angular/core';

interface Task {
  name: string;
  deadline: Date;
  queued: boolean;
  pomodorosRequired: number;
}

class TaskService {
  public taskStore: Array<Task> = [];
  constructor() {
  const tasks = [
    { 
      name: "Code an HTML Table",
      deadline: "Jun 23 2017",
      pomodorosRequired: 1
    }, { 
      name: "Sketch a wireframe for the new homepage",
      deadline: "Jun 24 2018",
      pomodorosRequired: 2
    }, {
      name: "Style table with Bootstrap styles",
      deadline: "Jun 25 20186",
      pomodorosRequired: 1
    }, {
      name: "Reinforce SEO with custom sitemap.xml",
      deadline: "Jun 26 2018",
      pomodorosRequired: 3
    }
  ];
  this.taskStore = tasks.map(task => {
    return {
      name: task.name,
      deadline: new Date(task.deadline),
      queued: false,
      pomodorosRequired: task.pomodorosRequired
    };
  });
}
}

@Component({
  selector: 'pomodoro-tasks',
  templateUrl: './pomodoro-tasks.component.html',
  styleUrls: ['./pomodoro-tasks.component.css']
})
export class PomodoroTasksComponent implements OnInit {
  today: Date;
  tasks: Task[];
  queuedPomodoros: number;
  queueHeaderMapping: any = {
    '=0': 'No pomodoros',
    '=1': 'One pomodoro',
    'other': '# pomodoros',    
  };

  constructor() { 
    const taskService: TaskService = new TaskService();
    this.tasks = taskService.taskStore;
    this.today = new Date();
    this.updateQueuedPomodoros();
  }

  ngOnInit() {
  }

  toggleTask(task: Task): void {
    task.queued = !task.queued;
    this.updateQueuedPomodoros();
  }

  private updateQueuedPomodoros(): void {
    this.queuedPomodoros = this.tasks.filter((task:Task) => task.queued)
    .reduce((pomodoros:number, queuedTask:Task) => {
      return pomodoros + queuedTask.pomodorosRequired}, 0);
  }

  
}
