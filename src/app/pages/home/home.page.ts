import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { RENTAL_DETAIL_API_OFFICE } from 'src/app/shared/services/api.url-helper';
import { ApiService } from 'src/app/shared/services/service';
import {Platform} from '@ionic/angular';
import { StartDutyComponent } from './duty-start/duty-start.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  rentalDetail: any;
  pages=[
    {
      title:'Upcoming Duty',
      url:'/home/upcomingDuty'
    },
    {
      title:'Old Duty',
      url:'/home/oldDuty'
    },
    {
      title:'About',
      url:'/home/about'
    }
  ];

  selectedPath='';
  pagerefrsh: string;
  subscribe: any;

  constructor(private router:Router, private service: ApiService, public platform: Platform, private dialog:MatDialog) {
    this.router.events.subscribe((event:RouterEvent)=>{
      this.selectedPath=event.url;
    });

    this.subscribe = this.platform.backButton.subscribeWithPriority(1000,()=>{
      if(this.constructor.name=="HomePage")
      {
        if(window.confirm("Do you want to exit"))
        {
          navigator["app"].exitApp();
        }
      }
    });

   }

  ngOnInit() {
    this.pagerefrsh = JSON.parse(localStorage.getItem('pagerefresh'));
    if(this.pagerefrsh == "0"){
      localStorage.setItem('pagerefresh', "1");
      location.reload();
    }
    var json = 
    {
      "mode": "6",
      "driver":localStorage.getItem(JSON.stringify('driverDetails.drivername'))
    };
    this.service.post(RENTAL_DETAIL_API_OFFICE, json).then((val: any) =>{
      debugger;
      this.rentalDetail = val.result;
    });
  }

    opendialog(){
      //localStorage.setItem('selectedcarid', id );
      const dialogRef = this.dialog.open(StartDutyComponent);
  
      dialogRef.afterClosed().subscribe(result => {
       console.log(`Dialog closed`);
      });
    }
  

}
