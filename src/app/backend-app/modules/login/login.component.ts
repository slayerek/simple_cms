import {Component, OnInit} from '@angular/core';
import {Login} from '../../../models/login.model';
import {ViewChild} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    modelLogin: Login = new Login();
    @ViewChild('f', {static: true}) form: any;

    constructor() {}

    ngOnInit() {
    }

    onSubmit() {
        if (this.form.valid) {

            console.log(this.modelLogin);


            this.form.reset();
        }
    }

}
