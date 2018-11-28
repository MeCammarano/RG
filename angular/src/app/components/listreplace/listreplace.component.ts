import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'listreplace',
    templateUrl: './listreplace.component.html',
    styleUrls: ['./listreplace.component.scss']
})
export class ListReplaceComponent implements OnInit {

    public users: any = [];

    constructor(
        private title : Title,
        private meta  : Meta,
        private route : ActivatedRoute
    ) {

    }

    ngOnInit() {

        this.title.setTitle('ListReplace / Angular SSR');
        this.meta.updateTag({
            'description': 'ListReplace'
        });

        this.route.data.subscribe(
            (data) => {
                this.users = data.users;
            }
        );

    }

}