import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactupdatemodalComponent } from './contactupdatemodal.component';

describe('ContactupdatemodalComponent', () => {
  let component: ContactupdatemodalComponent;
  let fixture: ComponentFixture<ContactupdatemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactupdatemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactupdatemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
