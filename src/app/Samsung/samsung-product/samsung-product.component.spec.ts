import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungProductComponent } from './samsung-product.component';

describe('SamsungProductComponent', () => {
  let component: SamsungProductComponent;
  let fixture: ComponentFixture<SamsungProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamsungProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamsungProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
