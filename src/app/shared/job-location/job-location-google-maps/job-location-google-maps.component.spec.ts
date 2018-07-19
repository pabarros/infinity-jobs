import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobLocationGoogleMapsComponent } from './job-location-google-maps.component';

describe('JobLocationGoogleMapsComponent', () => {
  let component: JobLocationGoogleMapsComponent;
  let fixture: ComponentFixture<JobLocationGoogleMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobLocationGoogleMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobLocationGoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
