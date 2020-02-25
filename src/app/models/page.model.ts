import {PageInterface} from '../interfaces/page';

export class Page implements PageInterface {

    id: number;
    name: string;
    url: string;
    short_desc: string;
    long_desc: string;
    active: number;
    menu: number;
    parent_id: number;
    image: string;
    subpages: Object[];
    contact_form: string;
    order: number;

    constructor(id: number, name: string, url: string, short_desc: string, long_desc: string, active: number, menu: number, parent_id: number, image: string, subpages: Object[], contact_form: string, order: number) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.short_desc = short_desc;
        this.long_desc = long_desc;
        this.active = active;
        this.menu = menu;
        this.parent_id = parent_id;
        this.image = image;
        this.subpages = subpages;
        this.contact_form = contact_form;
        this.order = order;
    }



}


