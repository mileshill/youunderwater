import { Component } from '@angular/core';
import { DiveSite } from './dive-site';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
}
