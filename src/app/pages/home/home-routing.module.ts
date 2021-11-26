import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DutyDetailsPage } from '../duty-details/duty-details.page';
import { UpcomingDutyPage } from '../upcoming-duty/upcoming-duty.page';
import { StartDutyComponent } from './duty-start/duty-start.component';


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
    path: 'oldDuty',
    loadChildren: () => import('../old-duty/old-duty.module').then( m => m.OldDutyPageModule)
    
    
  },
  {
    path: 'dutyDetails',
    component: DutyDetailsPage,
    
  },
  {
    path: 'kmread',
    component: StartDutyComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,routes],
})
export class HomePageRoutingModule {}
