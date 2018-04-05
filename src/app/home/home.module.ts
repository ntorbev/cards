import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    AppMaterialModule,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
