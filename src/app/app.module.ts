import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {JwtModule} from "@auth0/angular-jwt";
import {SortablejsModule} from 'ngx-sortablejs';

export function tokenGetter() {
    return localStorage.getItem("access_token");
}

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ErrorIntercept} from './interceptor/error.interceptor';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CookieService} from 'ngx-cookie-service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ["localhost:4200"],
                //blacklistedRoutes: ["example.com/examplebadroute/"]
            }
        }),
        SortablejsModule.forRoot({animation: 150})
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorIntercept,
            multi: true
        },
        CookieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
