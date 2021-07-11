import { TestBed } from '@angular/core/testing';

import { GloablErrorHandlerService } from './gloabl-error-handler.service';

describe('GloablErrorHandlerService', () => {
  let service: GloablErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GloablErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
