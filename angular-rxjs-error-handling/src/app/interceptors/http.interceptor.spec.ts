import { TestBed } from '@angular/core/testing';

import { ApiInterceptor } from './http.interceptor';

describe('HttpInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ApiInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: ApiInterceptor = TestBed.inject(ApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
