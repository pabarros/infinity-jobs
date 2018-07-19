import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';

import { JobLocationGoogleMapsComponent } from './job-location/job-location-google-maps/job-location-google-maps.component';
import { JobAllowRemoteComponent } from './job-location/job-allow-remote/job-allow-remote.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JobLocationGoogleMapsComponent, LoaderComponent, JobAllowRemoteComponent],
  exports: [JobLocationGoogleMapsComponent, LoaderComponent, JobAllowRemoteComponent]
})
export class SharedModule { }
