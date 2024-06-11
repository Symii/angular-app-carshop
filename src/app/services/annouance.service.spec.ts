import { TestBed } from '@angular/core/testing';

import { AnnouanceService } from './annouance.service';

describe('AnnouanceService', () => {
  let service: AnnouanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
