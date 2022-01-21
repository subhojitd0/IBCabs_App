import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RENTAL_DETAIL_API_OFFICE } from 'src/app/shared/services/api.url-helper';
import { ApiService } from 'src/app/shared/services/service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  constructor(private router:Router, private service: ApiService, private toastr: ToastrService) {
  }
   ngOnInit() : void {
    
   }
}
