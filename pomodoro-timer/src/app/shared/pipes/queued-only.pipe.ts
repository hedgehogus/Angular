import { Pipe, PipeTransform } from '@angular/core';
import { Queueable } from '../shared';

@Pipe({
    name: 'pomodoroQueuedOnly',
    pure: false
})

export class QueuedOnlyPipe implements PipeTransform {
    transform(queueableltems: Queueable[], ...args:any[]): Queueable[]{
    return queueableltems.filter ((queueableltem: Queueable) => {
        return queueableltem.queued === args[0];
    });
}
}