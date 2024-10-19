import { TestBed } from '@angular/core/testing';

import { CartsAdminService } from './carts-admin.service';

describe('CartsAdminService', () => {
  let service: CartsAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartsAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
