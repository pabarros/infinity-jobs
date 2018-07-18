import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  static _githubJobsApi = 'https://jobs.github.com/positions.json';

  constructor(
    private _httpClient: HttpClient
  ) { }

  getJobs(): Observable<Job[]> {
    return of(MOCK_JOBS)
  }
}
