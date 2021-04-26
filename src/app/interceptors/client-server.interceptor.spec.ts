import { TestBed } from '@angular/core/testing';

import { ClientServerInterceptor } from './client-server.interceptor';

describe('ClientServerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ClientServerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ClientServerInterceptor = TestBed.inject(ClientServerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
