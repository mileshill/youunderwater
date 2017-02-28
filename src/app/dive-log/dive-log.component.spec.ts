/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiveLogComponent } from './dive-log.component';

describe('DiveLogComponent', () => {
  let component: DiveLogComponent;
  let fixture: ComponentFixture<DiveLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
