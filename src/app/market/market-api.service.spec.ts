import { TestBed, inject } from '@angular/core/testing';

import { MarketApi } from './market-api.service';

describe('MarketApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketApi]
    });
  });

  it('should be created', inject([MarketApi], (service: MarketApi) => {
    expect(service).toBeTruthy();
  }));
});
