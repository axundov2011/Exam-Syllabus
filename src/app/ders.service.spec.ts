import { TestBed } from '@angular/core/testing';

import { DersService } from './services/ders.service';

describe('DersService', () => {
  let service: DersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
