import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DutyDetailsPageRoutingModule } from './duty-details-routing.module';

import { DutyDetailsPage } from './duty-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DutyDetailsPageRoutingModule
  ],
  declarations: [DutyDetailsPage]
})
export class DutyDetailsPageModule {}
