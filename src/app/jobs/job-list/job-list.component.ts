import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'ij-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: Job[];
  res: any;

  constructor(private _jobService: JobService) { }

  ngOnInit() {
    this._jobService.getJobs()
      .subscribe(jobs => this.jobs = []);
  }

}
