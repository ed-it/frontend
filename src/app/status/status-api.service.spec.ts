import { TestBed, inject } from '@angular/core/testing';

import { StatusApi } from './status-api.service';

describe('StatusApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusApi]
    });
  });

  it('should be created', inject([StatusApi], (service: StatusApi) => {
    expect(service).toBeTruthy();
  }));
});
