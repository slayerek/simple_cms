import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class SortableService {

    private apiUrl: string = 'http://laravelapi.tescik.ovh/sortable';

    constructor(private http: HttpClient, private authServ: AuthService) {}

    updateSortItems(modelName, sortArr) {

        const header = {Authorization: `Bearer ${this.authServ.getJwtToken()}`};
        let formData: any = new FormData();
        formData.append("modelName", modelName);
        formData.append("sortArr", sortArr);

        //return this.http.post(this.apiUrl, formData, {observe: 'response'});
        return this.http.post(this.apiUrl, formData, {headers: header});

    }

}
