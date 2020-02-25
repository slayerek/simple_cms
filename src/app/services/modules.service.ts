import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http/';

import {Module} from '../models/module.model';

@Injectable({
    providedIn: 'root'
})
export class ModulesService {

    private apiUrl: string = 'http://laravelapi.tescik.ovh/modules';

    constructor(private http: HttpClient) {}

    public getModules(): Observable<Module[]> {

        return this.http.get<Module[]>(this.apiUrl).pipe(
            map(
                res => {
                    return res.map(
                        item => {
                            return new Module(
                                item['id'],
                                item['name'],
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
