import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonProductsComponent } from './common-products.component';

describe('CommonProductsComponent', () => {
  let component: CommonProductsComponent;
  let fixture: ComponentFixture<CommonProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
