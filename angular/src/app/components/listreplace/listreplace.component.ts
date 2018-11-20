import { Component, OnInit } from '@angular/core';
import { Title, Meta, TransferState, makeStateKey } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

// make state key in state to store users
const STATE_KEY_USERS = makeStateKey('users');

@Component({
    selector    : 'listreplace',
    templateUrl : './listreplace.component.html',
    styleUrls   : ['./listreplace.component.scss']
})
export class ListReplaceComponent implements OnInit {

    public users: any = [];

    constructor(
        private title : Title,
        private meta  : Meta,
        private http  : HttpClient,
        private state : TransferState,
    ) { 

    }

    ngOnInit() {

        this.title.setTitle('ListReplace / Angular SSR');
        this.meta.updateTag({
            'description': 'ListReplace'
        });

        this.users = this.state.get(STATE_KEY_USERS, <any>[]);

        if(this.users.length == 0) {
            this.http.get('http://localhost:3000/assets/data.json')
                .subscribe(
                    (users) => {
                        this.users = users;
                        this.replaceUsers();
                        this.state.set(STATE_KEY_USERS, this.users);
                    },
                    (err) => {
                        console.log(err);
                    }
                );
        }

    }

    replaceUsers() {
        const usersLength = this.users.length - 1;
        this.users = this.users.map((x, i) => this.users[usersLength - i]);
    }

}