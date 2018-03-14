import { TestBed, inject } from '@angular/core/testing';

import { StatusStream } from './status-stream.service';

describe('StatusStream', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusStream]
    });
  });

  it('should be created', inject([StatusStream], (service: StatusStream) => {
    expect(service).toBeTruthy();
  }));
});
