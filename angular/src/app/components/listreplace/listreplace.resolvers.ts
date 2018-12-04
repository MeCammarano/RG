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

                    var number = (route.params.number) ? (route.params.number) : 1;

                    var promises = []; 

                    for(var i=0; i<number; i++) {
                        promises.push(this.http.get((<any>environment).baseUrl+'/assets/data.json').toPromise());
                    }  

                    Promise.all(promises).then(
                        (values) => {

                            var merged = [];

                            for(var value of values) {

                                for (let i = 0; i < 100000000; i++) {
                                    const [num1, num2] = [Math.floor(Math.random() * value.length), Math.floor(Math.random() * value.length)];
                                    [value[num1], value[num2]] = [value[num2], value[num1]];
                                }

                                merged = merged.concat(value);

                            }

                            this.stateService.set(merged);
                            return resolve(merged);

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