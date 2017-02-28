import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-site-view',
  templateUrl: './add-dive.component.html',
  styleUrls: ['./add-dive.component.css']
})
export class AddDiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() siteId: number;
  @Output() onAdded = new EventEmitter<string>();
  @Output() onCancel = new EventEmitter();
  siteName: string;

  added(){
  	this.onAdded.emit(this.siteName);
  }

  cancel(){
  	this.onCancel.emit(null);
  }
}
