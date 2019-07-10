import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatSortModule } from '@angular/material';
import { TableComponent } from './table.component';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent],
})
export class TableModule { }
