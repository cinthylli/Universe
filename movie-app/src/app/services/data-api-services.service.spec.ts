import { TestBed } from '@angular/core/testing';

import { DataApiServicesService } from './data-api-services.service';

describe('DataApiServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataApiServicesService = TestBed.get(DataApiServicesService);
    expect(service).toBeTruthy();
  });
});
