import { createReducer, on } from '@ngrx/store';
import { Decrement, Increment, Reset } from './counter.action';

export const initialState = 0;

export const countReducer = createReducer(
    initialState,
    on(Increment, (state) => state + 1),
    on(Decrement, (state) => state - 1),
    on(Reset, (state) => 0)
);
