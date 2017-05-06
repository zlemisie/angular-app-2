import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http} from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
    apiKey: 'AIzaSyC3dLfgSZcsoOVDYmfCg-O_prAc1ULG_PY',
    authDomain: 'angular-app-40596.firebaseapp.com',
    databaseURL: 'https://angular-app-40596.firebaseio.com',
    storageBucket: 'angular-app-40596.appspot.com',
    messagingSenderId: '1009238009103'
};

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
