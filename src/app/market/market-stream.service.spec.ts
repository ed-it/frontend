import { TestBed, inject } from '@angular/core/testing';

import { MarketStream } from './market-stream.service';

describe('MarketStream', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketStream]
    });
  });

  it('should be created', inject([MarketStream], (service: MarketStream) => {
    expect(service).toBeTruthy();
  }));
});
