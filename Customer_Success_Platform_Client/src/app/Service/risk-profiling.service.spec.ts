import { TestBed } from '@angular/core/testing';

import { RiskProfilingService } from './risk-profiling.service';

describe('RiskProfilingService', () => {
  let service: RiskProfilingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskProfilingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
