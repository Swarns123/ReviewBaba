import { TestBed } from '@angular/core/testing';

import { BengaliMovieInfoService } from './bengali-movie-info.service';

describe('BengaliMovieInfoService', () => {
  let service: BengaliMovieInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BengaliMovieInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
