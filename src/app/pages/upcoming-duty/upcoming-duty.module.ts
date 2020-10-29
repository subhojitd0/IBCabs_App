import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingDutyPageRoutingModule } from './upcoming-duty-routing.module';

import { UpcomingDutyPage } from './upcoming-duty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingDutyPageRoutingModule
  ],
  declarations: [UpcomingDutyPage]
})
export class UpcomingDutyPageModule {}
