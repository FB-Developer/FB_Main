import { TestBed, inject } from '@angular/core/testing';

import { ManagefacultyService } from './managefaculty.service';

describe('ManagefacultyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagefacultyService]
    });
  });

  it('should be created', inject([ManagefacultyService], (service: ManagefacultyService) => {
    expect(service).toBeTruthy();
  }));
});
