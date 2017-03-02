import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SiteManagementService } from '../site-management.service';

@Component({
  selector: 'delete-site-view',
  templateUrl: './delete-dive.component.html',
  styleUrls: ['./delete-dive.component.css']
})
export class DeleteDiveComponent implements OnChanges {
  siteId: number;
  siteName: string;
  private parSub; any;

  constructor(
    private siteService: SiteManagementService,
    private route: ActivatedRoute,
    private router: Router
    ){
    this.siteId = this.route.snapshot.params['id'];
    this.siteName = this.siteService
      .getSiteById(this.siteId).name;
  }

  ngOnChanges() {
    this.siteName = this.siteService
      .getSiteById(this.siteId).name;
  }

  delete(){
    this.siteService.deleteSite(this.siteId);
    this.router.navigate(['/list']);
  }
}
