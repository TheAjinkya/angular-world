import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedAppComponent } from './news-feed-app.component';

describe('NewsFeedAppComponent', () => {
  let component: NewsFeedAppComponent;
  let fixture: ComponentFixture<NewsFeedAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsFeedAppComponent]
    });
    fixture = TestBed.createComponent(NewsFeedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
