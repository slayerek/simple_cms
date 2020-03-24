import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private apiUrl: string = "http://laravelapi.tescik.ovh/api/login";

    constructor(private http: HttpClient) {}

    public getJWT(parameters): any {

        var formData: any = new FormData();
        formData.append("email", parameters['email']);
        formData.append("password", parameters['password']);

        console.log(formData)

        return this.http.post(this.apiUrl, formData, {observe: 'response'})
    }

}
