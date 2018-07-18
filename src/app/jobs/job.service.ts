import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Job } from './job';
import { MOCK_JOBS } from './mock.jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  static _githubJobsApi = 'https://jobs.github.com/positions.json';

  constructor(
    private _httpClient: HttpClient
  ) { }

  getJobs(): Observable<Job[]> {
    return of(MOCK_JOBS);
  }
}
