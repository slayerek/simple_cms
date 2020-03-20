import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SortablejsModule} from 'ngx-sortablejs';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {PageComponent} from './page/page.component';


@NgModule({
    declarations: [PagesComponent, PageComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        SortablejsModule
    ]
})
export class PagesModule {}
