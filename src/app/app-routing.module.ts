import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: 'upcomingDuty',
    loadChildren: () => import('./pages/upcoming-duty/upcoming-duty.module').then( m => m.UpcomingDutyPageModule)
    
  },
  {
    path: 'duty-details',
    loadChildren: () => import('./pages/duty-details/duty-details.module').then( m => m.DutyDetailsPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
