import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, Increment, Reset } from './counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  count$: Observable<number> | undefined

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select(state => state.count)
  }

  incrementCounter() {
    this.store.dispatch(Increment())
  }

  decrementCounter() {
    this.store.dispatch(Decrement())
  }

  reset() {
    this.store.dispatch(Reset())
  }

}
