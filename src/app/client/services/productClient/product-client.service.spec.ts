import { TestBed } from '@angular/core/testing';

import { ProductClientService } from './product-client.service';

describe('ProductClientService', () => {
  let service: ProductClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
