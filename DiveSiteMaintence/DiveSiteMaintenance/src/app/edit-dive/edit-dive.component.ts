import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DiveSite} from '../dive-site';

@Component({
  selector: 'edit-site-view',
  templateUrl: './edit-dive.component.html',
  styleUrls: ['./edit-dive.component.css']
})
export class EditDiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() site: DiveSite;
  @Output() onSaved = new EventEmitter<DiveSite>();
  @Output() onCancel = new EventEmitter();


  saved(){
  	if (this.site.id){
  		this.onSaved.emit(this.site);
  	}
  }

  cancel(){
  	this.onCancel.emit(null);
  }

}
