import { Component, DebugEventListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DRIVER_API } from 'src/app/shared/services/api.url-helper';
import { ApiService } from 'src/app/shared/services/service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:any;
  password:any;
  driverDetails:any;

  constructor(public router:Router, private service:ApiService, private toaster:ToastrService) 
  {
    let isLoggedIn = localStorage.getItem('loggedin'); 
    if(isLoggedIn && isLoggedIn == "1"){
      this.router.navigateByUrl('/home');
    }
  }

  redirectToHome()
  {
    var json={
      "mode":"5",
      "username": this.username,
      "password": this.password
    }

    this.service.post(DRIVER_API,json).then((val:any)=>{
      debugger;
      if(!val.status)
      {
        this.driverDetails=val;
        //localStorage.setItem('loggedin', "1");
       // localStorage.setItem('driverDetails',JSON.stringify(this.driverDetails));
        this.router.navigateByUrl('/home');
      }
      else{
          this.toaster.error("Enter Correct Credentials !");
      }
      

    });
    
  }

  ngOnInit() {
    localStorage.setItem('pagerefresh', "0");
  }

}
