import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { Routes,RouterModule } from '@angular/router';
import { StartDutyComponent } from './duty-start/duty-start.component';


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
    HomePageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
  ],
 
  declarations: [HomePage,StartDutyComponent]
})
export class HomePageModule {}
