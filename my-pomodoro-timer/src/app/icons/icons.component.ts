import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../pomodoro-tasks/pomodoro-tasks.component'

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  @Input() task: Task;
  @Input() size: number;
  icons: Object[] = [];

  constructor() { }

  ngOnInit() {
    this.icons.length = this.task.pomodorosRequired;
    this.icons.fill({name:this.task.name});
  }

}
