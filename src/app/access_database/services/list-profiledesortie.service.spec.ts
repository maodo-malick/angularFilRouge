import { TestBed } from '@angular/core/testing';

import { ListProfiledesortieService } from './list-profiledesortie.service';

describe('ListProfiledesortieService', () => {
  let service: ListProfiledesortieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListProfiledesortieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
