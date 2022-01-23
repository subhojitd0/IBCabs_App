import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RENTAL_DETAIL_API_OFFICE } from 'src/app/shared/services/api.url-helper';
import { ApiService } from 'src/app/shared/services/service';


@Component({
  selector: 'app-duty-start',
  templateUrl: './duty-start.component.html',
  styleUrls: ['./duty-start.component.scss']
})
export class StartDutyComponent implements OnInit {
  rentalAdd: any;
  appstatus: string;
  kmreading: string;
  showparking: boolean;
  showParkingBtn: boolean;
  parking = 0;
  constructor(private router:Router, private service: ApiService, private toastr: ToastrService) {
  }
   ngOnInit() : void {
    this.rentalAdd = JSON.parse(localStorage.getItem("driver.dutydetails"));
    this.appstatus = localStorage.getItem("driver.appstatus");
    if(this.appstatus === "3"){
      this.showparking = false;
      this.showParkingBtn = true;
    }
   }
   
   savecar(){

   }
   showpark(){
     this.showparking = true;
     this.showParkingBtn = false;
   }
   updateduty(){
    let timestring = new Date(new Date(new Date().setHours(new Date().getHours() + 5)).setMinutes(new Date().getMinutes() + 30)).toISOString();
    if(this.appstatus === "0"){
      this.rentalAdd.goutkm = this.kmreading;
      this.rentalAdd.gouttime = timestring.replace("T"," ").replace("Z", "");
      localStorage.setItem("driver.appstatus", "1");
    }
    if(this.appstatus === "1"){
      this.rentalAdd.routkm = this.kmreading;
      this.rentalAdd.routtime = timestring.replace("T"," ").replace("Z", "");
      localStorage.setItem("driver.appstatus", "2");
    }
    if(this.appstatus === "2"){
      this.rentalAdd.rinkm = this.kmreading;
      this.rentalAdd.rintime = timestring.replace("T"," ").replace("Z", "");
      localStorage.setItem("driver.appstatus", "3");
    }
    if(this.appstatus === "3"){
      this.rentalAdd.ginkm = this.kmreading;
      this.rentalAdd.gintime = timestring.replace("T"," ").replace("Z", "");
      this.rentalAdd.parking = this.parking;
      localStorage.setItem("driver.appstatus", "0");
    }
    this.rentalAdd.mode = "2";
    this.service.post(RENTAL_DETAIL_API_OFFICE, this.rentalAdd).then((res: any)=>{ 
      this.toastr.success("Your data was successfully saved",'Success');
      this.router.navigateByUrl('/home').then(() => {
        window.location.reload();
      });
    });
   }
}
