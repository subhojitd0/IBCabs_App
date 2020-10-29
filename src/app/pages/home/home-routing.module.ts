import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DutyDetailsPage } from '../duty-details/duty-details.page';
import { UpcomingDutyPage } from '../upcoming-duty/upcoming-duty.page';


import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    
  },
  {
    path: 'upcomingDuty',
    loadChildren: () => import('../upcoming-duty/upcoming-duty.module').then( m => m.UpcomingDutyPageModule)
    
    
  },
  {
    path: 'dutyDetails',
    component: DutyDetailsPage,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,routes],
})
export class HomePageRoutingModule {}
