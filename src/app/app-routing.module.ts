import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ReactiveFormComponent } from './form-wizard/reactive-form/reactive-form.component';
import { WeatherAppComponent } from './projects/weather-app/weather-app.component';
import { MoviesAppComponent } from './projects/movies-app/movies-app.component';
import { TicTacToeAppComponent } from './projects/tic-tac-toe-app/tic-tac-toe-app.component';
import { ExpenseAppComponent } from './projects/expense-app/expense-app.component';
import { StopWatchAppComponent } from './projects/stop-watch-app/stop-watch-app.component';
import { NewsFeedAppComponent } from './news-feed-app/news-feed-app.component';
import { UserComponent } from './user/user.component';
import { CounterComponent } from './counter/counter.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [{ path: 'dashboard', component: DashboardComponent },
{ path: 'todo', component: TodoFormComponent },
{ path: 'weatherapp', component: WeatherAppComponent },
{ path: 'moviesapp', component: MoviesAppComponent },
{ path: 'tictactoe', component: TicTacToeAppComponent },
{ path: 'expenseapp', component: ExpenseAppComponent },
{ path: 'stopwatch', component: StopWatchAppComponent },
{ path: 'registration', component: ReactiveFormComponent },
{ path: 'newsapp', component: NewsFeedAppComponent },
{ path: 'users', component: UserComponent },
{ path: 'counter', component: CounterComponent },
{ path: 'movies', component: MoviesComponent },
{ path: '**', redirectTo: 'weatherapp' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
