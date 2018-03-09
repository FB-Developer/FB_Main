import { TestBed, inject } from '@angular/core/testing';

import { FbresultService } from './fbresult.service';

describe('FbresultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbresultService]
    });
  });

  it('should be created', inject([FbresultService], (service: FbresultService) => {
    expect(service).toBeTruthy();
  }));
});
