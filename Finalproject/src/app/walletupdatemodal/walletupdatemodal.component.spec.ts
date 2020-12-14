import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletupdatemodalComponent } from './walletupdatemodal.component';

describe('WalletupdatemodalComponent', () => {
  let component: WalletupdatemodalComponent;
  let fixture: ComponentFixture<WalletupdatemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletupdatemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletupdatemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
