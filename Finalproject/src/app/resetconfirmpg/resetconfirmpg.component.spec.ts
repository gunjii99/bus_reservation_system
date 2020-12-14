import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetconfirmpgComponent } from './resetconfirmpg.component';

describe('ResetconfirmpgComponent', () => {
  let component: ResetconfirmpgComponent;
  let fixture: ComponentFixture<ResetconfirmpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetconfirmpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetconfirmpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
