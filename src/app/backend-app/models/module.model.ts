import {ModuleInteface} from '../interfaces/module';

export class Module implements ModuleInteface {

    id: number;
    name: string;
    active: number;
    order: number;

    constructor(id: number, name: string, active: number, order: number) {
        this.id = id;
        this.name = name;
        this.active = active;
        this.order = order;
    }

}
