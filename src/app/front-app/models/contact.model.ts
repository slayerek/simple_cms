import {ContactInterface} from '../interfaces/contact';

export class Contact implements ContactInterface {

    name: string;
    email: string;
    description: string;

    constructor(name: string = '', email: string = '', description: string = '') {
        this.name = name;
        this.email = email;
        this.description = description;
    }


}
