import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyRestCodeComponent } from './verify-rest-code.component';

describe('VerifyRestCodeComponent', () => {
  let component: VerifyRestCodeComponent;
  let fixture: ComponentFixture<VerifyRestCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyRestCodeComponent]
    });
    fixture = TestBed.createComponent(VerifyRestCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
