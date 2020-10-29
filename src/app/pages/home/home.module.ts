import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { Routes,RouterModule } from '@angular/router';


const routes:Routes=[
  {
    path: 'home',
    component: HomePage,
    children:[{
      path:'upcomingDuty',
      loadChildren:'../upcoming-duty/upcoming-duty.module'
    },
    {
      path:'oldDuty',
      loadChildren:'../old-duty/old-duty.module'
    }
      
    ]
  },
  {
    path:'',
    redirectTo:'/home/upcomingDuty',

  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
 
  declarations: [HomePage]
})
export class HomePageModule {}
