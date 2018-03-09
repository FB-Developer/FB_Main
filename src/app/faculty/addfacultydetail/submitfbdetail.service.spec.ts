import { TestBed, inject } from '@angular/core/testing';

import { SubmitfbdetailService } from './submitfbdetail.service';

describe('SubmitfbdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmitfbdetailService]
    });
  });

  it('should be created', inject([SubmitfbdetailService], (service: SubmitfbdetailService) => {
    expect(service).toBeTruthy();
  }));
});
