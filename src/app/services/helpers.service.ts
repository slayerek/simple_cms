import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HelpersService {

    constructor() {}

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

    public parseStringToNum(item) {
        return parseInt(item);
    }

    public parseArrToJsonString(arr) {
        return JSON.stringify(arr);
    }

    public sortItems(items, dir = 'asc', field = 'order') {
        return items.sort((a, b) => {
            switch (dir) {
                case 'desc':
                    return b[field] - a[field];
                    break;
                default:
                    return a[field] - b[field];
            }
        });
    }

}
