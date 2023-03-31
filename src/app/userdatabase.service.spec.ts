import { TestBed } from '@angular/core/testing';

import { UserdatabaseService } from './userdatabase.service';

describe('UserdatabaseService', () => {
  let service: UserdatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
