import { TestBed } from '@angular/core/testing';

import { ClientServerService } from './client-server.service';

describe('ClientServerService', () => {
  let service: ClientServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
