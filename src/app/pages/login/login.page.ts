import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router:Router) 
  {
    let isLoggedIn = localStorage.getItem('loggedin'); 
    if(isLoggedIn && isLoggedIn == "1"){
      this.router.navigateByUrl('/home');
    }
  }

  redirectToHome()
  {
    localStorage.setItem('loggedin', "1");
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
    localStorage.setItem('pagerefresh', "0");
  }

}
