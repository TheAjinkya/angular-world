import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  count$: Observable<number> | undefined

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select(state => state.count)
  }

}
