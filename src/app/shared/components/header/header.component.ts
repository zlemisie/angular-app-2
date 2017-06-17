import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private translate: TranslateService, private router: Router) { }

    ngOnInit() {}

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

}
