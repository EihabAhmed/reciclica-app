import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    PickupCallCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PickupCallCardComponent
  ]
})
export class PickupCallCardModule { }
