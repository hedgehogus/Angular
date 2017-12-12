import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './pomodoro-tasks/pomodoro-tasks.component';

@Pipe({
    name:'pomodoroFormattedTime'   
})
export class FormattedTimePipe implements PipeTransform {
    transform(totalMinutes:number): String {
        let minutes: number = totalMinutes%60;
        let hours: number = Math.floor(totalMinutes / 60);
        return `${hours}h:${minutes}m`;
    }
}

@Pipe({
    name: 'pomodoroQueuedOnly',
    pure: false
})
class QueuedOnlyPipe implements PipeTransform {
    transform(tasks: Task[], ...args:any[]): Task[]{
    return tasks.filter ((task: Task) => {
        return task.queued === args[0];
    });
}
}