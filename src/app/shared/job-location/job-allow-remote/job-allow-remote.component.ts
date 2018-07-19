import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ij-job-allow-remote',
  templateUrl: './job-allow-remote.component.html'
})
export class JobAllowRemoteComponent implements OnInit {

  @Input() jobAllowRemote = false;

  constructor() { }

  ngOnInit() {
  }

}
