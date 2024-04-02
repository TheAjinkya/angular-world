import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeAppComponent } from './tic-tac-toe-app.component';

describe('TicTacToeAppComponent', () => {
  let component: TicTacToeAppComponent;
  let fixture: ComponentFixture<TicTacToeAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicTacToeAppComponent]
    });
    fixture = TestBed.createComponent(TicTacToeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
