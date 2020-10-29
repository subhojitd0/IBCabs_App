import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldDutyPageRoutingModule } from './old-duty-routing.module';

import { OldDutyPage } from './old-duty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldDutyPageRoutingModule
  ],
  declarations: [OldDutyPage]
})
export class OldDutyPageModule {}
