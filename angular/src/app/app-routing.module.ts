import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ListReplaceComponent } from './components/listreplace/listreplace.component';

const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'list', 
        component: ListComponent 
    },
    { 
        path: 'listreplace', 
        component: ListReplaceComponent 
    },
    { 
        path: '**', 
        redirectTo: '/' 
    }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule { }