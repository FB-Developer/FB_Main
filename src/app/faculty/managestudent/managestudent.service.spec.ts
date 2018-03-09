import { TestBed, inject } from '@angular/core/testing';

import { ManagestudentService } from './managestudent.service';

describe('ManagestudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagestudentService]
    });
  });

  it('should be created', inject([ManagestudentService], (service: ManagestudentService) => {
    expect(service).toBeTruthy();
  }));
});
