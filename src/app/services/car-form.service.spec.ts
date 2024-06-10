import { TestBed } from '@angular/core/testing';

import { CarFormService } from './car-form.service';

describe('CarFormService', () => {
  let service: CarFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
