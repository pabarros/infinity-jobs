import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Job } from './job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  static _infinityJobsApi = 'https://api-infinity-jobs.herokuapp.com/jobs/';

  constructor(
    private _httpClient: HttpClient
  ) { }

  getJobs(): Observable<Job[]> {
    return this._httpClient.get(JobService._infinityJobsApi).
      pipe(
        map((res: Array<any>) => res.map(job =>
          new Job(
            job.id,
            job.created_at,
            job.title,
            job.location,
            job.description,
            job.how_to_apply,
            job.company,
            job.company_url,
            job.company_logo,
            job.url
          )))
      );
  }
}
