import { TestBed } from '@angular/core/testing';

import { UserdelService } from './userdel.service';

describe('UserdelService', () => {
  let service: UserdelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
