import { Component, OnInit } from '@angular/core';
import { Job } from '../job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'ij-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: Job[];
  public jobsCount = 0;
  public hasJobsLoaded = false;

  constructor(private _jobService: JobService) { }

  ngOnInit() {
    this._jobService.getJobs()
      .subscribe((jobs: Job[]) => {
        this.jobs = jobs.slice(0, 10);
        this.hasJobsLoaded = true;
        this.jobsCount = this.jobs.length;
      });
  }

}
