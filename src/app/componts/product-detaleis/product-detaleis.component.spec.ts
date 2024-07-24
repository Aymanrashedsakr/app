import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaleisComponent } from './product-detaleis.component';

describe('ProductDetaleisComponent', () => {
  let component: ProductDetaleisComponent;
  let fixture: ComponentFixture<ProductDetaleisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetaleisComponent]
    });
    fixture = TestBed.createComponent(ProductDetaleisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
