import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { SiteManagementService } from '../site-management.service';

@Component({
  selector: 'add-site-view',
  templateUrl: './add-dive.component.html',
  styleUrls: ['./add-dive.component.css']
})
export class AddDiveComponent implements OnInit {

  
  ngOnInit() {
  }


  @Output() onClosed = new EventEmitter();
  siteName: string;

  constructor(
    private siteService: SiteManagementService,
    private router: Router
    ) {
  }


  add(){
    this.siteService.addSite({id: 0, name: this.siteName});
    this.router.navigate(['/list']);
  }

  cancel(){
    this.router.navigate(['/list']);
  }
}
