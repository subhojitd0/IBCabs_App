import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { RENTAL_DETAIL_API_OFFICE } from 'src/app/shared/services/api.url-helper';
import { ApiService } from 'src/app/shared/services/service';

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

  constructor(private router:Router, private service: ApiService) {
    this.router.events.subscribe((event:RouterEvent)=>{
      this.selectedPath=event.url;
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
      "mode": 0,
      "month": "12",
      "year": "2020",
      "filterby": "party",
      "property": "CNN-M-1"
    };
    this.service.post(RENTAL_DETAIL_API_OFFICE, json).then((val: any) =>{
      debugger;
      this.rentalDetail = val.result;
    });
  }

}
