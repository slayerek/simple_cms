import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http/';

import {Module} from '../models/module.model';

@Injectable({
    providedIn: 'root'
})
export class ModulesService {

    private apiUrl: string = 'http://laravelapi.tescik.ovh/modules';

    constructor(private http: HttpClient, private authServ: AuthService) {}

    public getModules(): Observable<Module[]> {

        const header = {Authorization: `Bearer ${this.authServ.getJwtToken()}`};

        return this.http.get<Module[]>(this.apiUrl, {headers: header}).pipe(
            map(
                res => {
                    return res.map(
                        item => {
                            return new Module(
                                item['id'],
                                item['name'],
                                item['url'],
                                item['active'],
                                item['order']
                            );
                        }
                    );
                }
            )
        );

    }

}
