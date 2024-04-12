import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyAppComponent } from './spotify-app.component';

describe('SpotifyAppComponent', () => {
  let component: SpotifyAppComponent;
  let fixture: ComponentFixture<SpotifyAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotifyAppComponent]
    });
    fixture = TestBed.createComponent(SpotifyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
