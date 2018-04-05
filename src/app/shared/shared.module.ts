import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './card/card.component';
import { CardDetailsComponent } from './card-details/card-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [CardComponent, CardDetailsComponent, CardDetailsComponent],
  exports: [CommonModule, CardComponent, CardDetailsComponent]
})
export class SharedModule {
}
