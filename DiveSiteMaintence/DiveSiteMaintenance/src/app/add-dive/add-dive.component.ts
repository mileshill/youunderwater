import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SiteManagementService } from '../site-management.service';

@Component({
  selector: 'add-site-view',
  templateUrl: './add-dive.component.html',
  styleUrls: ['./add-dive.component.css']
})
export class AddDiveComponent implements OnInit {

  
  ngOnInit() {
  }


  /*
  @Input() siteId: number;
  @Output() onAdded = new EventEmitter<number>();
  @Output() onCancel = new EventEmitter();
  */

  @Output() onClosed = new EventEmitter();
  siteName: string;

  // SiteManagementService is injected from AppComponent
  // Dependency injection has a Parent-Child relation with components
  constructor(private siteService: SiteManagementService) {
  }


  // Add new site
 add(){
    this.siteService.addSite({id: 0, name: this.siteName});
    this.onClosed.emit(null);
  }

  // Cancel addition of new site
  cancel(){
    this.onClosed.emit(null);
  }


  /*
  added(){
  	this.onAdded.emit(this.siteName);
  }

  cancel(){
  	this.onCancel.emit(null);
  }
  */
}
