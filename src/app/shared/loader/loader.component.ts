import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ij-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {

  @Input() showLoader = false;
  @Input() displayText = '';

  constructor() { }

  ngOnInit() {
  }

}
