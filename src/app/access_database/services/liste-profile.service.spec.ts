import { TestBed } from '@angular/core/testing';

import { ListeProfileService } from './liste-profile.service';

describe('ListeProfileService', () => {
  let service: ListeProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
