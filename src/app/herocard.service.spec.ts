import { TestBed } from '@angular/core/testing';

import { HerocardService } from './herocard.service';

describe('HerocardService', () => {
  let service: HerocardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerocardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
