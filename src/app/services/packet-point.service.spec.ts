import { TestBed } from '@angular/core/testing';

import { PacketPointService } from './packet-point.service';

describe('PacketPointService', () => {
  let service: PacketPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacketPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
