import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from '../data';
@Component({
  selector: 'app-home',
  templateUrl: `home.component.html`

})
export class HomeComponent implements OnInit {
  public message: string;
  public data;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.message = 'Hello';
    // this.http.get("assets/data.json").subscribe(
    //   (data) => {
    //     this.data = data
    //   }
    // )
    this.data = data;

  }
}
