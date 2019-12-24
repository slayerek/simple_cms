import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HelpersService {

    constructor() {}

    public findPageByUrl(arr, url: string | number): Object {

        const item = arr.find((elem) => {
            return typeof url === 'number' ? elem['id'] == url : elem['url'] == url;
        });

        return item;

    }
}
