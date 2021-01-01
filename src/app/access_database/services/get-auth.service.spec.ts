import { TestBed } from '@angular/core/testing';

import { GetAuthService } from './get-auth.service';

describe('GetAuthService', () => {
  let service: GetAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
