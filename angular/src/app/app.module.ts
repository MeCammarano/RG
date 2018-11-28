import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ListReplaceComponent } from './components/listreplace/listreplace.component';

import { StateService } from './state.service';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ListComponent,
        ListReplaceComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        StateService
    ]
})
export class AppModule { }
