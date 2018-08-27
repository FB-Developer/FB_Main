import { TestBed, inject } from '@angular/core/testing';

import { FbresultServe } from './fbresult.serve';

describe('FbresultServe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbresultService]
    });
  });

  it('should be created', inject([FbresultService], (service: FbresultService) => {
    expect(service).toBeTruthy();
  }));
});
