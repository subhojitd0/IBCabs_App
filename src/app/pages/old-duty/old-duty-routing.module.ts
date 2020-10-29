import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldDutyPage } from './old-duty.page';

const routes: Routes = [
  {
    path: '',
    component: OldDutyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldDutyPageRoutingModule {}
