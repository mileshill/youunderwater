import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DiveSite } from '../dive-site';

@Component({
  selector: 'site-list-view',
  templateUrl: './dive-list.component.html',
  styleUrls: ['./dive-list.component.css']
})
export class DiveListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() sites; // passed from AppComponent
  @Output() onAdd = new EventEmitter();
  @Output() onEdit = new EventEmitter<DiveSite>();

  add(){
  	this.onAdd.emit(null);
  }

  edit(site: DiveSite){
  	this.onEdit.emit(site);
  }


}
