import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ij-job-location-google-maps',
  templateUrl: './job-location-google-maps.component.html'
})
export class JobLocationGoogleMapsComponent implements OnInit {

  // Job location description
  @Input() jobLocation: string;

  // Job location formated to google maps
  jobLocationOnGMaps: string;

  // Flag to show or hidden remote and location icon
  isFullyRemote: boolean = false;

  constructor() { }

  ngOnInit() {
    this.setLocationGMaps();
    this.verifyFullRemoteLocation();
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

  /**
   * Check if job location has only remote available,
   * to make location mark will desapear.
   */
  verifyFullRemoteLocation(): void {
    const pattern = new RegExp('^remote$');

    this.isFullyRemote = pattern.test(
      this.jobLocation.toLocaleLowerCase().trim()
    );
  }
}
