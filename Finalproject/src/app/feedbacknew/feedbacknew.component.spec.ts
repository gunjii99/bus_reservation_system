import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacknewComponent } from './feedbacknew.component';

describe('FeedbacknewComponent', () => {
  let component: FeedbacknewComponent;
  let fixture: ComponentFixture<FeedbacknewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbacknewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacknewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
