import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleProductsComponent } from './apple-products.component';

describe('AppleProductsComponent', () => {
  let component: AppleProductsComponent;
  let fixture: ComponentFixture<AppleProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
