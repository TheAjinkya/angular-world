import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  count$: Observable<number> | undefined

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select(state => state.count)
  }

}
