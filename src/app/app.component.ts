import { Component, ViewChild } from '@angular/core';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(TableComponent) tbl: TableComponent;
  title = 'demo-material';
  table1: string;
  columns: any[] = [{ columnValue: 'name', columnLabel: 'Name' , sort: true}, { columnValue: 'id', columnLabel: 'ID' }];
  rows: any[] = [{ id: 1, name: 'sai',  last:'Adepu' },{ id: 2, name: 'nsai',  last:'bAdepu' }];

  addRow() {
    this.rows.push({ name: 'kumar', id: 2 , last:'Adepu'});
    this.tbl.loadTable();
  }

  addCol(){
    this.columns.push({ columnValue: 'last', columnLabel: 'Last Name' });
    this.tbl.loadColumns();
  }

}
