import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailupdatemodalComponent } from './emailupdatemodal.component';

describe('EmailupdatemodalComponent', () => {
  let component: EmailupdatemodalComponent;
  let fixture: ComponentFixture<EmailupdatemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailupdatemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailupdatemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
