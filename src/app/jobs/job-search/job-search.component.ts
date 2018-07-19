import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../job.model';

@Component({
  selector: 'ij-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {

  @Input() jobList: Job[];
  public allowRemoteIsChecked: boolean;

  constructor() { }

  ngOnInit() {
    this.allowRemoteIsChecked = false;
  }

  public changeAllowRemote(): void {
    this.allowRemoteIsChecked = !this.allowRemoteIsChecked;
    console.log(`${this.allowRemoteIsChecked}`);
  }
}
