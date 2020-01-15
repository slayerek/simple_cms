import { TestBed } from '@angular/core/testing';

import { SlidersService } from './sliders.service';

describe('SlidersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlidersService = TestBed.get(SlidersService);
    expect(service).toBeTruthy();
  });
});
