import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_JOBS } from './mock-jobs';

import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  getJobs(): Observable<Job[]> {
    return of(MOCK_JOBS);
  }
}
