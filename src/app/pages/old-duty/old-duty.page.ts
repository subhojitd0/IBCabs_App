import { Component, OnInit } from '@angular/core';
import { RENTAL_DETAIL_API_OFFICE } from 'src/app/shared/services/api.url-helper';
import { ApiService } from 'src/app/shared/services/service';

@Component({
  selector: 'app-old-duty',
  templateUrl: './old-duty.page.html',
  styleUrls: ['./old-duty.page.scss'],
})
export class OldDutyPage implements OnInit {
  pagerefrsh: any;
  dutyid: string;
  appstatus: string;
  rentalDetail: any[];

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.pagerefrsh = JSON.parse(localStorage.getItem('pagerefresh'));
    if(this.pagerefrsh == "0"){
      localStorage.setItem('pagerefresh', "1");
      location.reload();
    }
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
  filterupcomingduty(data: any){
    this.dutyid = localStorage.getItem("driver.dutyid");
    this.appstatus = localStorage.getItem("driver.appstatus");
    let upcomingdutys = [];
    let olddutys = [];
    data.forEach(element => {
      if(new Date(element.dutydate) >= new Date()){
        if(this.dutyid){
          if(element.dutyid === this.dutyid){
            element.showGout = true;
            element.showRout = false;
            element.showRin = false;
            element.showGin = false;
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
            if(this.appstatus === "0"){
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
          element.showGout = true;
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
    
    this.rentalDetail = olddutys;
  }
}
