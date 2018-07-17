import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header.component';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { JobListComponent } from './jobs/job-list/job-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
