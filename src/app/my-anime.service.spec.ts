import { TestBed } from '@angular/core/testing';

import { MyAnimeService } from './my-anime.service';

describe('MyAnimeService', () => {
  let service: MyAnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAnimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
