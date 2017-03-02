import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SiteManagementService } from '../site-management.service';

@Component({
  selector: 'edit-site-view',
  templateUrl: './edit-dive.component.html',
  styleUrls: ['./edit-dive.component.css']
})
export class EditDiveComponent implements OnInit {
  siteId: number;
  siteName: string;
  private parSub: any; 

  
  ngOnInit() {
  }

  constructor(
    private siteService: SiteManagementService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.siteId = this.route.snapshot.params['id'];
    this.siteName = this.siteService
      .getSiteById(this.siteId).name;
  }

  save(){
  	this.siteService.saveSite({id: this.siteId, name: this.siteName });
    this.router.navigate(['/list']);
  }
}
