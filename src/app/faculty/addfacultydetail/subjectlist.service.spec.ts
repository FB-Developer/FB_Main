import { TestBed, inject } from '@angular/core/testing';

import { SubjectlistService } from './subjectlist.service';

describe('SubjectlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectlistService]
    });
  });

  it('should be created', inject([SubjectlistService], (service: SubjectlistService) => {
    expect(service).toBeTruthy();
  }));
});
