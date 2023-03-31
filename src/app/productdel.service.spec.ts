import { TestBed } from '@angular/core/testing';

import { ProductdelService } from './productdel.service';

describe('ProductdelService', () => {
  let service: ProductdelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductdelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
