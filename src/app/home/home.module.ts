import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { JobModule } from '../jobs/job.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    JobModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
