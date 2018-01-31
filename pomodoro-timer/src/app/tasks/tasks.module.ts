import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnderlineDirective } from './task-underline.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
        UnderlineDirective
    ],
    exports: [
        UnderlineDirective
    ]
})
export class TasksModule { }