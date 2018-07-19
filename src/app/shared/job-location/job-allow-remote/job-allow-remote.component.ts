import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ij-job-allow-remote',
  templateUrl: './job-allow-remote.component.html'
})
export class JobAllowRemoteComponent implements OnInit {

  @Input() jobLocation = '';
  public jobAllowRemote = false;

  constructor() { }

  ngOnInit() {
    this.jobAllowRemote = this.jobLocation.toLocaleLowerCase().indexOf('remote') !== -1;
  }

}
