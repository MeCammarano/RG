import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector    : 'list',
    templateUrl : './list.component.html',
    styleUrls   : ['./list.component.scss']
})
export class ListComponent implements OnInit {

    public users: any = [];

    constructor(
        private title : Title,
        private meta  : Meta,
        private route : ActivatedRoute
    ) { 

    }

    ngOnInit() {

        this.title.setTitle('List / Angular SSR');
        this.meta.updateTag({
            'description': 'List'
        });

        this.route.data.subscribe(
            (data) => {
                this.users = data.users;
            }
        );

    }
    
}