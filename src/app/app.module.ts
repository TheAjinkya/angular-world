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

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InfoHeaderComponent,
    FormsComponent,
    DashboardComponent,
    NavbarComponent,
    TodoFormComponent,
    FormlyFieldInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridAngular,
    BrowserAnimationsModule,
    FormlyMaterialModule,
    MatButtonModule, MatTooltipModule, FormlyModule.forRoot(), ReactiveFormsModule, FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
