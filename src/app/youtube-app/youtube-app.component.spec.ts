import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeAppComponent } from './youtube-app.component';

describe('YoutubeAppComponent', () => {
  let component: YoutubeAppComponent;
  let fixture: ComponentFixture<YoutubeAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeAppComponent]
    });
    fixture = TestBed.createComponent(YoutubeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
