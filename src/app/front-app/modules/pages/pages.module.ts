import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {MainPageComponent} from './main-page/main-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
    declarations: [
        PagesComponent,
        MainPageComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PagesRoutingModule,
        PipesModule
    ],
})
export class PagesModule {}
