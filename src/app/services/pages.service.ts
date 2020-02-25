import {Injectable} from '@angular/core';
import {Page} from '../models/page.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {HelpersService} from './helpers.service';

@Injectable({
    providedIn: 'root'
})
export class PagesService {

    private apiUrl: string = 'http://laravelapi.tescik.ovh/pages';

    constructor(private http: HttpClient, private helpers: HelpersService) {}

    public getPages(): Observable<Page[]> {

        return this.http.get<Page[]>(this.apiUrl).pipe(
            map(
                res => {
                    return res.map(page => {
                        return new Page(
                            page['id'],
                            page['name'],
                            page['url'],
                            page['short_desc'],
                            page['long_desc'],
                            page['active'],
                            page['menu'],
                            page['parent_id'],
                            page['image'],
                            page['contact_form'],
                            page['order']
                        );
                    });
                }
            )
        );

    }

    public getPage(url: string = '', id: number = 0): Observable<Page> {

        let pageUrl = id ? id : url;

        return this.http.get<Page[]>(this.apiUrl).pipe(
            map(
                pages => {

                    const page = this.helpers.findPageByUrl(pages, pageUrl);

                    if (page !== undefined) {
                        return new Page(
                            page['id'],
                            page['name'],
                            page['url'],
                            page['short_desc'],
                            page['long_desc'],
                            page['active'],
                            page['menu'],
                            page['parent_id'],
                            page['image'],
                            page['subpages'],
                            page['contact_form']
                        );
                    }

                }
            )
        );

    }

}
