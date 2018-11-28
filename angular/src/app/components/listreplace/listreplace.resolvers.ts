import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { StateService } from '../../state.service';

@Injectable()
export class ListReplaceResolver implements Resolve<any> {

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
                    this.http.get('http://localhost:'+(<any>environment).port+'/assets/data.json')
                    .subscribe(
                        (usersResponse: any) => {

                            for (let i = 0; i < 100000000; i++) {
                                const [num1, num2] = [Math.floor(Math.random() * usersResponse.length), Math.floor(Math.random() * usersResponse.length)];
                                [usersResponse[num1], usersResponse[num2]] = [usersResponse[num2], usersResponse[num1]];
                            }

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