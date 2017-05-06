import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(public af: AngularFire, private translate: TranslateService, private router: Router) { }

    ngOnInit() {}

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        this.af.auth
        // You only want unathenticated states:
            .filter((authState) => !authState)
            // You only want the first unathenticated state:
            .first()
            // You should now be able to navigate:
            .subscribe(() => this.router.navigate(['/login']));
        // The composed observable completes, so there's no need to unsubscribe.
        this.af.auth.logout();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
