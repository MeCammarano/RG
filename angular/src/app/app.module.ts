import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent, children: [
          { path: 'table', component: TableComponent },
        ]
      },
    ]),
    TransferHttpCacheModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
