import { Pipe, PipeTransform } from '@angular/core';

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