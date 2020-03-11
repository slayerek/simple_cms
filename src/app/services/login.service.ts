import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/login.model';


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private apiUrl: string = "http://laravelapi.tescik.ovh/api/login";

    constructor(private http: HttpClient) {}

    public getJWT(parameters) {

        var formData: any = new FormData();
        formData.append("email", parameters['email']);
        formData.append("password", parameters['password']);

        return this.http.post<Login>(this.apiUrl, formData, {observe: 'response'})
    }

}
