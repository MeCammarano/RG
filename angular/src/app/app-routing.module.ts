import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ListReplaceComponent } from './components/listreplace/listreplace.component';
import { ListReplaceResolver } from './components/listreplace/listreplace.resolvers';
import { ListResolver } from './components/list/list.resolvers';

const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'list', 
        component: ListComponent,
        resolve : {
            users : ListResolver
        }
    },
    { 
        path: 'listreplace', 
        component: ListReplaceComponent,
        resolve : {
            users : ListReplaceResolver
        }
    },
    { 
        path: '**', 
        redirectTo: '/' 
    }
];

@NgModule({
    imports   : [RouterModule.forRoot(routes)],
    exports   : [RouterModule],
    providers : [
        ListResolver,
        ListReplaceResolver
    ]
})
export class AppRoutingModule { }