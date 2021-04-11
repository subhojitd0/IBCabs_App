import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-duty-details',
  templateUrl: './duty-details.page.html',
  styleUrls: ['./duty-details.page.scss'],
})
export class DutyDetailsPage implements OnInit {


  constructor(public router:Router) { 

    
  }

  ngOnInit() {
  }

  backhome(){
    this.router.navigateByUrl('/home');
  }
 

}
