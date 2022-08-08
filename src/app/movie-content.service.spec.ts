import { TestBed } from '@angular/core/testing';

import { MovieContentService } from './movie-content.service';

describe('MovieContentService', () => {
  let service: MovieContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
