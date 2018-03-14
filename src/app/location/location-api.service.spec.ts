import { TestBed, inject } from '@angular/core/testing';

import { LocationApi } from './location-api.service';

describe('LocationApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationApi]
    });
  });

  it('should be created', inject([LocationApi], (service: LocationApi) => {
    expect(service).toBeTruthy();
  }));
});
