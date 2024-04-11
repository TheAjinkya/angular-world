import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PexelAppComponent } from './pexel-app.component';

describe('PexelAppComponent', () => {
  let component: PexelAppComponent;
  let fixture: ComponentFixture<PexelAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PexelAppComponent]
    });
    fixture = TestBed.createComponent(PexelAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
