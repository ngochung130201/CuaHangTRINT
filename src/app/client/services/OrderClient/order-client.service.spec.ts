import { TestBed } from '@angular/core/testing';

import { OrderClientService } from './order-client.service';

describe('OrderClientService', () => {
  let service: OrderClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
