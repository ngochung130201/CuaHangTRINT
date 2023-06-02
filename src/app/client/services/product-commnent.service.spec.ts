import { TestBed } from '@angular/core/testing';

import { ProductCommnentService } from './product-commnent.service';

describe('ProductCommnentService', () => {
  let service: ProductCommnentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCommnentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
