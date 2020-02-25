import {ModuleInteface} from '../interfaces/module';

export class Module implements ModuleInteface {

    id: number;
    name: string;
    url: string;
    active: number;
    order: number;

    constructor(id: number, name: string, url: string, active: number, order: number) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.active = active;
        this.order = order;
    }

}
