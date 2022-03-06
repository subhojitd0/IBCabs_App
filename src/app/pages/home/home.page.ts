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
  dutyid: string;
  appstatus: string;

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
    /* navigator.geolocation.getCurrentPosition(resp => {
      alert( "lng: " + resp.coords.longitude + " ,lat:" + resp.coords.latitude);
    }); */
    this.pagerefrsh = JSON.parse(localStorage.getItem('pagerefresh'));
    if(this.pagerefrsh == "0"){
      localStorage.setItem('pagerefresh', "1");
      location.reload();
    }
    this.calldata(); 
    let timervariale = 60000;
    
    setInterval(() => {
      this.calldata(); 
    }, timervariale);
    
  }
  calldata(){
    var json = 
    {
      "mode": "6",
      "driver": JSON.parse(localStorage.getItem("driverDetails")).drivername
    };
    this.service.post(RENTAL_DETAIL_API_OFFICE, json).then((val: any) =>{
      debugger;
      this.filterupcomingduty(val.result);
      //this.rentalDetail = val.result;
    });
  }
  getdata(event){
    var json = 
    {
      "mode": "6",
      "driver": JSON.parse(localStorage.getItem("driverDetails")).drivername
    };
    this.service.post(RENTAL_DETAIL_API_OFFICE, json).then((val: any) =>{
      debugger;
      this.filterupcomingduty(val.result);
      if (event)
          event.target.complete();
      //this.rentalDetail = val.result;
    });
  }
  filterupcomingduty(data: any){
    this.dutyid = localStorage.getItem("driver.dutyid");
    this.appstatus = localStorage.getItem("driver.appstatus");
    let upcomingdutys = [];
    let olddutys = [];
    data.forEach(element => {
      element.phone = "tel:" + element.reporttonum;
      if(new Date(element.dutydate) > new Date(new Date().setDate(new Date().getDate()-1))){
        if(this.dutyid){
          if(element.dutyid === this.dutyid){
            element.showGout = false;
            element.showRout = false;
            element.showRin = false;
            element.showGin = false;
            if(element.appstatus.toString() === "0" && element.da.toString() === "0")
            {
              element.showAccept = true;
            }
            if(element.appstatus.toString() === "0" && element.da.toString() === "1")
            {
              element.showAccept = false;
              element.showGout = true;
            }
            if(element.appstatus.toString() === "1"){
              element.showRout = true;
              element.showGout = false;
            }
            if(element.appstatus.toString() === "2"){
              element.showRin = true;
              element.showGout = false;
            }
            if(element.appstatus.toString() === "3"){
              element.showGin = true;
              element.showGout = false;
            }
            if(element.appstatus.toString() === "4"){
              element.showGout = false;
            }
          }
          else{
            debugger;
            if(this.appstatus === "0" && element.da.toString() === "0"){
              element.showAccept = true;
            }
            else if(this.appstatus === "0" && element.da.toString() === "1"){
              element.showAccept = false;
              element.showGout = true;
            }
            else{
              element.showGout = false;
            }
            element.showRout = false;
            element.showRin = false;
            element.showGin = false;
          }
        }
        else{
          element.showAccept = true;
          element.showGout = false;
          element.showRout = false;
          element.showRin = false;
          element.showGin = false;
        }
        if(element.appstatus.toString() === "4"){
          olddutys.push(element);
        }
        else{
          upcomingdutys.push(element);
        }
      }
      else{
        olddutys.push(element);
      }
    });
    debugger;
    
    this.rentalDetail = upcomingdutys;
  }
    opendialog(data: any){
      //localStorage.setItem('selectedcarid', id );
      /* const dialogRef = this.dialog.open(StartDutyComponent);
  
      dialogRef.afterClosed().subscribe(result => {
       console.log(`Dialog closed`);
      }); */
      if(data.showAccept){
        data.mode = "2";
        data.da = "1";
        data.f = "a";
        this.service.post(RENTAL_DETAIL_API_OFFICE, data).then((res: any)=>{ 
          localStorage.setItem("driver.dutydetails", JSON.stringify(data));
          localStorage.setItem("driver.dutyid", data.dutyid);
          localStorage.setItem("driver.appstatus", data.appstatus);
            window.location.reload();
        });
      }
      else{
        localStorage.setItem("driver.dutydetails", JSON.stringify(data));
        localStorage.setItem("driver.dutyid", data.dutyid);
        localStorage.setItem("driver.appstatus", data.appstatus);
        this.router.navigateByUrl('/home/kmread');
      }
      
    }
  

}
