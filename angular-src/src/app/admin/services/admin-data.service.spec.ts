import { TestBed, inject } from '@angular/core/testing';

import { AdminDataService } from './admin-data.service';

describe('AdminDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminDataService]
    });
  });

  it('should be created', inject([AdminDataService], (service: AdminDataService) => {
    expect(service).toBeTruthy();
  }));
});
