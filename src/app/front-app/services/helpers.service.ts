import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HelpersService {

    constructor(private http: HttpClient) {}

    public findPageByUrl(arr, url: string | number): Object {

        let item;

        for (let elem of arr) {

            if (typeof url === 'number' && elem['id'] == url || typeof url === 'string' && elem['url'] == url) {
                item = elem;
            }

            if (elem.subpages !== undefined) {
                for (let subElem of elem.subpages) {
                    if (typeof url === 'number' && subElem['id'] == url || typeof url === 'string' && subElem['url'] == url) {
                        item = subElem;
                    }
                }
            }

        }

        return item;
    }

    public htmlCollectionToArr(collection) {
        return [...collection];
    }

    public replaceString(item: string, elementToReplace: string, elementAfterReplace: string) {
        return item.replace(elementToReplace, elementAfterReplace);
    }


}
