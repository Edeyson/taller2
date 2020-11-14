import { TestBed } from '@angular/core/testing';

import { TrikiService } from './triki.service';

describe('TrikiService', () => {
  let service: TrikiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrikiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
