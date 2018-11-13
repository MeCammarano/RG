import { Component, OnInit } from '@angular/core';
import { data } from '../data';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styles: []
})
export class TableComponent implements OnInit {
  public data;
  constructor() { }

  ngOnInit() {
    this.data = data;
  }

  replaceAll() {
    const dataLen = this.data.length - 1;
    this.data = this.data.map((x, i) => this.data[dataLen - i]);
  }

}
