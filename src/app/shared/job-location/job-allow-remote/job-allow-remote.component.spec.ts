import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAllowRemoteComponent } from './job-allow-remote.component';

describe('JobAllowRemoteComponent', () => {
  let component: JobAllowRemoteComponent;
  let fixture: ComponentFixture<JobAllowRemoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAllowRemoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAllowRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
