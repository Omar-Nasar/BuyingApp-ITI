import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusHeaderComponent } from './aboutus-header.component';

describe('AboutusHeaderComponent', () => {
  let component: AboutusHeaderComponent;
  let fixture: ComponentFixture<AboutusHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
