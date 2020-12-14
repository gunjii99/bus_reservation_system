import { TestBed } from '@angular/core/testing';

import { ChangepasswordsService } from './changepasswords.service';

describe('ChangepasswordsService', () => {
  let service: ChangepasswordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangepasswordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
