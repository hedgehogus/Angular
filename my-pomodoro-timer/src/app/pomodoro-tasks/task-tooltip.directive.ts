import { Directive, Input, Output, HostListener } from '@angular/core';
import {Task} from "./pomodoro-tasks.component"

@Directive({
    selector: '[taskTooltip]'    
})

 export class TaskTooltipDirective {
    private defaultTooltipText: string;
    @Input() task: Task;
    @Output() taskTooltip: any;

    @HostListener('mouseover') onMouseOver(){
        if(!this.defaultTooltipText && this.taskTooltip) {
            this.defaultTooltipText = this.taskTooltip.innerText;
        }
        this.taskTooltip.innerText = this.task.name;
    }

    @HostListener('mouseout') onMouseOut() {
        if(this.taskTooltip) {
            this.taskTooltip.innerText = this.defaultTooltipText;
        }
    }
}