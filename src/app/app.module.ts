import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AgGridAngular } from 'ag-grid-angular';
import { InfoHeaderComponent } from './info-header/info-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
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
    StopWatchAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridAngular,
    BrowserAnimationsModule,
    FormlyMaterialModule,
    HttpClientModule,
    MatButtonModule, MatTooltipModule, FormlyModule.forRoot(), ReactiveFormsModule, FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
