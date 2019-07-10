import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

const ELEMENT_DATA: any = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' }
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit {
  @Input() table: any[];
  @Input() tableType: string;
  @Input() columns: any[];
  @Input() rows: any[];
  tableData: any[];
  columnsToDisplay: any[] = [];
  // displayedColumns: any[];
  dataSource: any;
  constructor() { }

  @ViewChild(MatSort) matSort: MatSort;
  ngOnInit() {
    this.loadColumns();
    this.loadTable();
    this.dataSource.sort = this.matSort;
  }

  loadTable() {
    this.dataSource = new MatTableDataSource(this.rows);
    this.dataSource.sort = this.matSort;
  }
  loadColumns() {
    // eleminate duplicate column object then assign
    // this.columnsToDisplay = this.columns.map((ele,i) => i.toString());
    this.columnsToDisplay = this.columns.map(ele => ele.columnValue);
  }
  ngAfterViewInit() {
    this.dataSource.sortingDataAccessor = (item, property) => {
      return item[property];
    };
  }
}
