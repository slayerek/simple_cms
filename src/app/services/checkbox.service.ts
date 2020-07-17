import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckboxService {

    private apiUrl: string = 'http://laravelapi.tescik.ovh/checkbox';

    constructor(private http: HttpClient, private authServ: AuthService) {}

    updateCheckboxStatus(status,field,id,modelName) {

        const header = {Authorization: `Bearer ${this.authServ.getJwtToken()}`};
        let formData: any = new FormData();
        formData.append("modelName", modelName);
        formData.append("field", field);
        formData.append("id", id);
        formData.append("checkboxStatus", status);

        //return this.http.post(this.apiUrl, formData, {observe: 'response'});
        return this.http.post(this.apiUrl, formData, {headers: header});

    }

}
