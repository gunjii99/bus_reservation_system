import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressupdatemodalComponent } from './addressupdatemodal.component';

describe('AddressupdatemodalComponent', () => {
  let component: AddressupdatemodalComponent;
  let fixture: ComponentFixture<AddressupdatemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressupdatemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressupdatemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
