import {Component, OnInit} from '@angular/core';
import {Login} from '../../../models/login.model';
import {LoginService} from '../../../services/login.service';
import {AuthService} from '../../../services/auth.service';
import {ViewChild} from '@angular/core';
import {Router} from "@angular/router"

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    modelLogin: Login = new Login();
    @ViewChild('f', {static: true}) form: any;
    public httpStatus: number = 0;


    constructor(private loginServ: LoginService, private authServ: AuthService, private router: Router) {}

    ngOnInit() {
        if (this.authServ.isAuthenticated()) {
            this.goToModules();
        }
    }

    onSubmit() {
        if (this.form.valid) {

            this.loginServ.getJWT(this.modelLogin).subscribe(
                (response) => {
                    if (response.status === 200) {
                        this.httpStatus = response.status;
                        const jwt = response.body.token;
                        localStorage.setItem('token', jwt);
                        this.goToModules();
                    }
                },
                (error) => {
                    this.httpStatus = error;
                    console.log(error)
                }
            );


            this.form.reset();
        }
    }

    private goToModules() {
        this.router.navigate(['/dashboard']);
    }

}
