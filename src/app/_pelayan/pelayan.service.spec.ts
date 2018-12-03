import { TestBed } from '@angular/core/testing';

import { PelayanService } from './pelayan.service';

describe('PelayanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PelayanService = TestBed.get(PelayanService);
    expect(service).toBeTruthy();
  });
});
