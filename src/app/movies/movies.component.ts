import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';
import { getMovies } from './movies.action';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  movies$: Observable<Movie[]> | undefined

  constructor(private store: Store) {
    this.store.dispatch(getMovies())
  }

  ngOnInit() {
    this.movies$ = this.store.select((state) => state.movie)
  }

}
