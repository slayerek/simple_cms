import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SortableService {

    private apiUrl: string = 'http://laravelapi.tescik.ovh/sortable';

    constructor(private http: HttpClient) {}

    updateSortItems(parameters) {

        var formData: any = new FormData();
        formData.append("sortArr", parameters);

        return this.http.post(this.apiUrl, formData, {observe: 'response'})

    }

}
