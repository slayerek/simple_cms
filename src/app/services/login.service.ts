import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private apiUrl: string = "http://laravelapi.tescik.ovh/api/login";

    constructor(private http: HttpClient) {}

    public login() {



    }

}
