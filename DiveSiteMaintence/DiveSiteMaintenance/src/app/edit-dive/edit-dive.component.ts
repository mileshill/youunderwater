import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 import { SiteManagementService } from '../site-management.service';

@Component({
  selector: 'edit-site-view',
  templateUrl: './edit-dive.component.html',
  styleUrls: ['./edit-dive.component.css']
})
export class EditDiveComponent implements OnInit {

  
  ngOnInit() {
  }

  // Class Vars
  private _siteId: number;
  siteName: string; 
  
  // INPUT
  // Handle initialization error
  @Input() set siteId(id: number){
    this._siteId = id;
    this.siteName = this.siteService.getSiteById(id).name;
  }

  // OUTPUT
  @Output() onClosed = new EventEmitter();

  // Dependency Injection; 
  constructor(private siteService: SiteManagementService) {}

 
  



  save(){
  	this.siteService.saveSite({id: this._siteId, name: this.siteName });
    this.onClosed.emit(null);
  }

  cancel(){
  	this.onClosed.emit(null);
  }

}
