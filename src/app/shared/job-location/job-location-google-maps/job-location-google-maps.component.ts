import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ij-job-location-google-maps',
  templateUrl: './job-location-google-maps.component.html'
})
export class JobLocationGoogleMapsComponent implements OnInit {

  @Input() jobLocation: string;
  jobLocationOnGMaps: string;

  constructor() { }

  ngOnInit() {
    this.setLocationGMaps();
  }

  /**
   * Format `location` attribute string to perform
   * google maps search url
   */
  setLocationGMaps(): void {
    const googleMapsUrl = 'https://www.google.com.br/maps/place/';
    const formatedLocation = this.jobLocation.toLocaleLowerCase()
      .replace('remote', '')
      .replace(' ', '+');

    this.jobLocationOnGMaps = `${googleMapsUrl}${formatedLocation}`;
  }

}
