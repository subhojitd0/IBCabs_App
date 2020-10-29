import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingDutyPage } from './upcoming-duty.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingDutyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingDutyPageRoutingModule {}
