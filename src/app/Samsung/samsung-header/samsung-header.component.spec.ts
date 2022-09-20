import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungHeaderComponent } from './samsung-header.component';

describe('SamsungHeaderComponent', () => {
  let component: SamsungHeaderComponent;
  let fixture: ComponentFixture<SamsungHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamsungHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamsungHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
