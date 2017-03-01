import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DiveSite} from '../dive-site';

@Component({
  selector: 'delete-site-view',
  templateUrl: './delete-dive.component.html',
  styleUrls: ['./delete-dive.component.css']
})
export class DeleteDiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() site: DiveSite;
  @Output() onDeleted = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  deleted(){
  	if (this.site.id){
  		this.onDeleted.emit(null);
  	}
  }

  cancel(){
  	this.onCancel.emit(null);

  }

}
