import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAppComponent } from './expense-app.component';

describe('ExpenseAppComponent', () => {
  let component: ExpenseAppComponent;
  let fixture: ComponentFixture<ExpenseAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseAppComponent]
    });
    fixture = TestBed.createComponent(ExpenseAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
