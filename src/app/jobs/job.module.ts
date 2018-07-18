import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list/job-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JobListComponent],
  exports: [JobListComponent]
})
export class JobModule { }
