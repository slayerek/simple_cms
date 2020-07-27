import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SortablejsModule} from 'ngx-sortablejs';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {PageComponent} from './page/page.component';

import {SharedTableComponent} from '../../components/shared-table/shared-table.component';

import {PipesModule} from '../../../pipes/pipes.module';

@NgModule({
    declarations: [PagesComponent, PageComponent, SharedTableComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        SortablejsModule,
        PipesModule
    ]
})
export class PagesModule {}
