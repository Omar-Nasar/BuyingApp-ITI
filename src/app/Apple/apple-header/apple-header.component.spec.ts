import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleHeaderComponent } from './apple-header.component';

describe('AppleHeaderComponent', () => {
  let component: AppleHeaderComponent;
  let fixture: ComponentFixture<AppleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
