import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BackendAppRoutingModule} from './backend-app-routing.module';
import {BackendAppComponent} from './backend-app.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';


@NgModule({
    declarations: [
        BackendAppComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        BackendAppRoutingModule
    ],
    providers: [
    ]
})
export class BackendAppModule {}
