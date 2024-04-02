import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopWatchAppComponent } from './stop-watch-app.component';

describe('StopWatchAppComponent', () => {
  let component: StopWatchAppComponent;
  let fixture: ComponentFixture<StopWatchAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StopWatchAppComponent]
    });
    fixture = TestBed.createComponent(StopWatchAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
