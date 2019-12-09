import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FrontAppRoutingModule} from './front-app-routing.module';
import {FrontAppComponent} from './front-app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SliderComponent} from './components/slider/slider.component';
import {MenuComponent} from './components/menu/menu.component';
import {ContentComponent} from './content/content.component';



@NgModule({
    declarations: [
        FrontAppComponent,
        HeaderComponent,
        FooterComponent,
        SliderComponent,
        MenuComponent,
        ContentComponent
    ],
    imports: [
        CommonModule,
        FrontAppRoutingModule
    ]
})
export class FrontAppModule {}
