import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthpaymentComponent } from './unauthpayment.component';

describe('UnauthpaymentComponent', () => {
  let component: UnauthpaymentComponent;
  let fixture: ComponentFixture<UnauthpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
