import { Component } from '@angular/core';
import { DiveSite } from './dive-site';
import { SiteManagementService } from './site-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SiteManagementService]
})

export class AppComponent {

  title = "Dive Site Maintenance";
  // siteId: number;
  // currentView = 'list';
  
  // navigateTo(view: string){
  //   this.currentView = view;
  // }
  }

  /*
  title = 'Dive Site Maintenance';
  newSiteId: number;
  currentSite: DiveSite;
  sites = DiveSite.FavoriteSites.slice(0);
  currentView = 'list';
  

  navigateTo(view: string){
  	this.currentView = view;
  }

  startAdd(){
    this.newSiteId = this.sites.length > 0
    ? this.sites.map(s => s.id).reduce((p,c) => p < c ? c : p) + 1
    : 1;
  	this.navigateTo('add');
  }

  siteAdded(newSiteName: string){
  	this.sites.push({id: this.newSiteId, name: newSiteName});
  	this.navigateTo('list');
  }

  startEdit(site: DiveSite){
  	this.currentSite = { id: site.id, name: site.name };
  	this.navigateTo('edit');
  }

  siteSaved(site: DiveSite){
  	let oldSite = this.sites.filter(s => s.id == site.id)[0];
  	if (oldSite){
  		oldSite.name = site.name;
  	}
  	this.navigateTo('list');
  }


  startDelete(site:DiveSite){
    this.currentSite = site;
    this.navigateTo('delete');
  }

  siteDeleted(site: DiveSite){
    var siteIndex = this.sites.indexOf(this.currentSite);
    if(siteIndex >= 0){
      this.sites.splice(siteIndex, 1);
    }
    this.navigateTo('list');
  }
  */

