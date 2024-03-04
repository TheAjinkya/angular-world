import { Component } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid-community';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.scss'],
  providers: [MatButtonModule, MatTooltipModule],
})
export class InfoHeaderComponent implements IHeaderAngularComp {
  agInit(params: IHeaderParams): void {
    console.log('params', params);
  }

  refresh(params: IHeaderParams): boolean {
    return false;
  }
}
