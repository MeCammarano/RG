import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { StateService } from '../../state.service';

@Injectable()
export class ListResolver implements Resolve<any> {

    constructor(
        private http         : HttpClient,
        private stateService : StateService
    ) {}

    public resolve(
        route : ActivatedRouteSnapshot,
        state : RouterStateSnapshot
    ) {

        return new Promise(
            (resolve, reject) => {
                
                var users = this.stateService.get();

                if(users.length == 0) {
                    this.http.get((<any>environment).baseUrl+'/assets/data.json')
                    .subscribe(
                        (usersResponse: any) => {
                            this.stateService.set(usersResponse);
                            return resolve(usersResponse);
                        },
                        (err) => {
                            console.log(err);
                            return reject(err);
                        }
                    );
                }
                else {
                    return resolve(users);
                }

            }
        );
    
    }

}