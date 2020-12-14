import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthticketComponent } from './unauthticket.component';

describe('UnauthticketComponent', () => {
  let component: UnauthticketComponent;
  let fixture: ComponentFixture<UnauthticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
