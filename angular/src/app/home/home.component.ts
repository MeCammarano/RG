import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: `home.component.html`

})
export class HomeComponent {

  constructor(private http: HttpClient) {
  }
}
