import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DiveSite } from '../dive-site';
import { SiteManagementService } from '../site-management.service';

@Component({
  selector: 'site-list-view',
  templateUrl: './dive-list.component.html',
  styleUrls: ['./dive-list.component.css']
})
export class DiveListComponent implements OnInit {

  ngOnInit() {
  }

  sites: DiveSite[];

  // @Input() sites;
  @Output() onAdd = new EventEmitter();
  @Output() onEdit = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();

  constructor(private siteService: SiteManagementService) { 
    this.sites = siteService.getAllSites();
  }

  add(){
  	this.onAdd.emit(null);
  }

  edit(siteId: number){
  	this.onEdit.emit(siteId);
  }

  delete(siteId: number){
    this.onDelete.emit(siteId);
  }


}
