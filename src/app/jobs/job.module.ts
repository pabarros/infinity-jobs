import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list/job-list.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [JobListComponent, JobSearchComponent],
  exports: [JobListComponent, JobSearchComponent]
})
export class JobModule { }
