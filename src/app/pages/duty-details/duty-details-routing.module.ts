import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DutyDetailsPage } from './duty-details.page';

const routes: Routes = [
  {
    path: '',
    component: DutyDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DutyDetailsPageRoutingModule {}
