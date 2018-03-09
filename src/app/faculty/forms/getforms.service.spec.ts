import { TestBed, inject } from '@angular/core/testing';

import { GetformsService } from './getforms.service';

describe('GetformsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetformsService]
    });
  });

  it('should be created', inject([GetformsService], (service: GetformsService) => {
    expect(service).toBeTruthy();
  }));
});
