import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {MainPageComponent} from './main-page/main-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


@NgModule({
    declarations: [PagesComponent, MainPageComponent, PageNotFoundComponent],
    imports: [
        CommonModule,
        PagesRoutingModule
    ],
})
export class PagesModule {}
