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

    public getGallery(page_desc: any) {

        let regexp = /{{gall_[0-9]}}/g;
        let array = [...page_desc.matchAll(regexp)];
        const galleryArray = [];


        if (array.length > 1) {
            for (let gallItem of array) {
                console.log(gallItem[0].replace(/{{|}}/g, ''));
            }
        }

        // console.log(galleryArray);

    }

}
