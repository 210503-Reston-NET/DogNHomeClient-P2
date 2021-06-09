import { TestBed } from '@angular/core/testing';

import { DNHService } from './dnh.service';

describe('DNHService', () => {
  let service: DNHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DNHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
