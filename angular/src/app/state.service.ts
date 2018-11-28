import { Injectable } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';

// make state key in state to store users
const STATE_KEY_USERS = makeStateKey('users');

@Injectable({
    providedIn : 'root'
})
export class StateService {

    constructor(
        private transferState : TransferState
    ) {}

    get() {
        return this.transferState.get(STATE_KEY_USERS, <any>[]);
    }

    set(data) {
        this.transferState.set(STATE_KEY_USERS, data);
    }

}