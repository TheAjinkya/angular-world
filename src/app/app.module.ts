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

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InfoHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridAngular,
    BrowserAnimationsModule,
    MatButtonModule, MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
