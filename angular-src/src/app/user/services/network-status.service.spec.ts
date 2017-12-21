import { TestBed, inject } from '@angular/core/testing';

import { NetworkStatusService } from './network-status.service';

describe('NetworkStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworkStatusService]
    });
  });

  it('should be created', inject([NetworkStatusService], (service: NetworkStatusService) => {
    expect(service).toBeTruthy();
  }));
});
