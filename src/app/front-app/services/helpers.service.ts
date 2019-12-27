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

    public htmlCollectionToArr(collection) {
        return [...collection];
    }

    public replaceString(item: string, elementToReplace: string, elementAfterReplace: string) {
        return item.replace(elementToReplace, elementAfterReplace);
    }

}
