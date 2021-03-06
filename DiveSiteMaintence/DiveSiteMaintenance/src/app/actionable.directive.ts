import { Directive, ElementRef, HostListener } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ywActionable]'
})
export class ActionableDirective {
  @Input() backgroundColor: string;
  @Output() onAction = new EventEmitter();


  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
  	this.setAppearance(this.backgroundColor || '#4994af', 'pointer');
  }

  @HostListener('mouseleave') onMouseLeave(){
  	this.setAppearance(null, null);
  }


  setAppearance(color: string, cursor: string){
  	let style = this.element.nativeElement.style;
  	style.backgroundColor = color;
  	style.cursor = cursor;
  }

  @HostListener('click') onClick() {
  	this.onAction.emit(null);
  }

}
