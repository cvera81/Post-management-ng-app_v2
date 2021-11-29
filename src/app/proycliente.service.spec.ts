import { TestBed } from '@angular/core/testing';

import { ProyclienteService } from './proycliente.service';

describe('ProyclienteService', () => {
  let service: ProyclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
