import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelFrequentComponent } from './travel-frequent.component';

describe('TravelFrequentComponent', () => {
  let component: TravelFrequentComponent;
  let fixture: ComponentFixture<TravelFrequentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelFrequentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelFrequentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
