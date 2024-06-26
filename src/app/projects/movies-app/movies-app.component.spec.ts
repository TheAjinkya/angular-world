import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesAppComponent } from './movies-app.component';

describe('MoviesAppComponent', () => {
  let component: MoviesAppComponent;
  let fixture: ComponentFixture<MoviesAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesAppComponent]
    });
    fixture = TestBed.createComponent(MoviesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
