import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AgGridAngular } from 'ag-grid-angular';
import { InfoHeaderComponent } from './info-header/info-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormsComponent } from './forms/forms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormlyFieldInputComponent } from './formly/formly-field-input/formly-field-input.component';
import { ReactiveFormComponent } from './form-wizard/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './form-wizard/template-form/template-form.component';
import { WeatherAppComponent } from './projects/weather-app/weather-app.component';
import { MoviesAppComponent } from './projects/movies-app/movies-app.component';
import { ExpenseAppComponent } from './projects/expense-app/expense-app.component';
import { TicTacToeAppComponent } from './projects/tic-tac-toe-app/tic-tac-toe-app.component';
import { StopWatchAppComponent } from './projects/stop-watch-app/stop-watch-app.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TodolistComponent } from './projects/todolist/todolist.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { GithubUsersAppComponent } from './github-users-app/github-users-app.component';
import { NewsFeedAppComponent } from './news-feed-app/news-feed-app.component';
import { QuizAppComponent } from './projects/quiz-app/quiz-app.component';
import { JobsAppComponent } from './projects/jobs-app/jobs-app.component';
import { PexelAppComponent } from './pexel-app/pexel-app.component';
import { SpotifyAppComponent } from './spotify-app/spotify-app.component';
import { YoutubeAppComponent } from './youtube-app/youtube-app.component';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import { addReducer } from './Reducer/Product.reducer';
import { CounterComponent } from './counter/counter.component';
import { countReducer } from './counter/counter.reducer';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { movieReducer } from './movies/movies.reducer';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InfoHeaderComponent,
    FormsComponent,
    DashboardComponent,
    NavbarComponent,
    TodoFormComponent,
    FormlyFieldInputComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    WeatherAppComponent,
    MoviesAppComponent,
    ExpenseAppComponent,
    TicTacToeAppComponent,
    StopWatchAppComponent,
    GalleryComponent,
    TodolistComponent,
    CalculatorComponent,
    GithubUsersAppComponent,
    NewsFeedAppComponent,
    QuizAppComponent,
    JobsAppComponent,
    PexelAppComponent,
    SpotifyAppComponent,
    YoutubeAppComponent,
    UserComponent,
    CounterComponent,
    FooterComponent,
    MoviesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridAngular,
    BrowserAnimationsModule,
    FormlyMaterialModule,
    HttpClientModule,
    StoreModule.forRoot({ movies: movieReducer }),
    MatButtonModule, MatTooltipModule, FormlyModule.forRoot(), ReactiveFormsModule, FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
