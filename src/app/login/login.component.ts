import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { Router } from '@angular/router';

class Credentials {
    name: string;
    password: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    credentials: Credentials = {
        name: '',
        password : ''
    };

    error: any;

    constructor(public af: AngularFire, private router: Router) {
        this.af.auth.subscribe(auth => {
            if (auth) {
                this.router.navigateByUrl('/dashboard');
            }
        });
    }

    ngOnInit() { }

    onLoggedin() {
        this.af.auth.login({
                email: this.credentials.name,
                password: this.credentials.password
            },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            }).then(
            (success) => {
                console.log(success);
                localStorage.setItem('isLoggedin', 'true');
            }).catch(
            (err) => {
                console.log(err);
                this.error = err;
            });
    }
}
