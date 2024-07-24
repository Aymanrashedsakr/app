/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CatergorisComponent } from './Catergoris.component';

describe('CatergorisComponent', () => {
  let component: CatergorisComponent;
  let fixture: ComponentFixture<CatergorisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatergorisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatergorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
