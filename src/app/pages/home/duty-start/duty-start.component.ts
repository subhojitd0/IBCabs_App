import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RENTAL_DETAIL_API_OFFICE } from 'src/app/shared/services/api.url-helper';
import { ApiService } from 'src/app/shared/services/service';
import SignaturePad from 'signature_pad';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
@Component({
  selector: 'app-duty-start',
  templateUrl: './duty-start.component.html',
  styleUrls: ['./duty-start.component.scss']
})
export class StartDutyComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: true }) signaturePadElement;
  rentalAdd: any;
  appstatus: string;
  kmreading: string;
  showparking: boolean;
  showParkingBtn: boolean;
  parking = 0;
  signaturePad: SignaturePad;
  constructor(private router:Router, private service: ApiService, private toastr: ToastrService,
    private base64ToGallery: Base64ToGallery, private androidPermissions: AndroidPermissions,
    private elementRef: ElementRef) {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.init();
  }
  init() {
    if(this.appstatus === '2'){
      const canvas: any = this.elementRef.nativeElement.querySelector('canvas');
      debugger;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 500;
      if (this.signaturePad) {
        this.signaturePad.clear(); // Clear the pad on init
      }
    }
    
  }
  ngAfterViewInit(): void {
    this.appstatus = localStorage.getItem("driver.appstatus");
    if(this.appstatus === '2'){
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
    this.signaturePad.clear();
    this.signaturePad.penColor = 'rgb(56,128,255)';
    }
  }
  save(): void {
    navigator.geolocation.getCurrentPosition(resp => {
      const img = this.signaturePad.toDataURL();
      debugger;
      let timestring = new Date(new Date(new Date().setHours(new Date().getHours() + 5)).setMinutes(new Date().getMinutes() + 30)).toISOString();
      if(this.appstatus === "2"){
        this.rentalAdd.rinkm = this.kmreading;
        this.rentalAdd.rintime = timestring.replace("T"," ").replace("Z", "");
        this.rentalAdd.signature = img;
        localStorage.setItem("driver.appstatus", "3");
        this.rentalAdd.mode = "2";
        this.rentalAdd.lat3 = resp.coords.latitude;
        this.rentalAdd.long3 = resp.coords.longitude;
        this.rentalAdd.f = "a";
        this.service.post(RENTAL_DETAIL_API_OFFICE, this.rentalAdd).then((res: any)=>{ 
          this.toastr.success("Your data was successfully saved",'Success');
          this.router.navigateByUrl('/home').then(() => {
            window.location.reload();
          });
        });
      }
    });
  }

  isCanvasBlank(): boolean {
    if (this.signaturePad) {
      return this.signaturePad.isEmpty() ? true : false;
    }
  }

  clear() {
    this.signaturePad.clear();
  }

  undo() {
    const data = this.signaturePad.toData();
    if (data) {
      data.pop(); // remove the last dot or line
      this.signaturePad.fromData(data);
    }
  }
   ngOnInit() : void {
    this.init();
    this.rentalAdd = JSON.parse(localStorage.getItem("driver.dutydetails"));
    this.appstatus = localStorage.getItem("driver.appstatus");
    if(this.appstatus === "3"){
      this.showparking = true;
      this.showParkingBtn = true;
    }
   }
   
   savecar(){

   }
   showpark(){
     this.showparking = false;
     this.showParkingBtn = false;
   }
   updateduty(){
    this.toastr.info("Please wait while we are saving your data");
    navigator.geolocation.getCurrentPosition(resp => {
      let timeval = new Date(new Date(new Date().setHours(new Date().getHours() + 5)).setMinutes(new Date().getMinutes() + 30));
      if(timeval.getMinutes() <= 10){
        timeval.setMinutes(0);
      }
      else if(timeval.getMinutes() > 10 && timeval.getMinutes() < 15){
        timeval.setMinutes(15);
      }
      else if(timeval.getMinutes() > 15 && timeval.getMinutes() <=20 ){
        timeval.setMinutes(15);
      }
      else if(timeval.getMinutes() > 20 && timeval.getMinutes() < 30){
        timeval.setMinutes(30);
      }
      else if(timeval.getMinutes() > 30 && timeval.getMinutes() <= 40){
        timeval.setMinutes(30);
      }
      else if(timeval.getMinutes() > 40 && timeval.getMinutes() < 45 ){
        timeval.setMinutes(45);
      }
      else if(timeval.getMinutes() > 45 && timeval.getMinutes() <= 50){
        timeval.setMinutes(45);
      }
      else if(timeval.getMinutes() > 50 && timeval.getMinutes() <= 59){
        timeval.setHours(timeval.getHours() + 1);
        timeval.setMinutes(0);
      }
      let timestring = timeval.toISOString();
      if(this.appstatus === "0"){
        this.rentalAdd.goutkm = this.kmreading;
        this.rentalAdd.gouttime = timestring.replace("T"," ").replace("Z", "");
        this.rentalAdd.lat1 = resp.coords.latitude;
        this.rentalAdd.long1 = resp.coords.longitude;
        localStorage.setItem("driver.appstatus", "1");
      }
      if(this.appstatus === "1"){
        this.rentalAdd.routkm = this.kmreading;
        this.rentalAdd.routtime = timestring.replace("T"," ").replace("Z", "");
        this.rentalAdd.lat2 = resp.coords.latitude;
        this.rentalAdd.long2 = resp.coords.longitude;
        localStorage.setItem("driver.appstatus", "2");
      }
      if(this.appstatus === "2"){
        this.rentalAdd.rinkm = this.kmreading;
        this.rentalAdd.rintime = timestring.replace("T"," ").replace("Z", "");
        this.rentalAdd.lat3 = resp.coords.latitude;
        this.rentalAdd.long3 = resp.coords.longitude;
        localStorage.setItem("driver.appstatus", "3");
      }
      if(this.appstatus === "3"){
        this.rentalAdd.ginkm = this.kmreading;
        this.rentalAdd.gintime = timestring.replace("T"," ").replace("Z", "");
        this.rentalAdd.parking = this.parking;
        this.rentalAdd.lat4 = resp.coords.latitude;
        this.rentalAdd.long4 = resp.coords.longitude;
        localStorage.setItem("driver.appstatus", "0");
      }
      this.rentalAdd.mode = "2";
      this.rentalAdd.f = "a";
      this.service.post(RENTAL_DETAIL_API_OFFICE, this.rentalAdd).then((res: any)=>{ 
        this.toastr.success("Your data was successfully saved",'Success');
        /* debugger;
        alert("status: " + res.status );
        this.toastr.info("status: " + res.status ); */
        this.router.navigateByUrl('/home').then(() => {
          window.location.reload();
        });
      });
    });
   }
}
