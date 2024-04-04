import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sAdminGuard } from './s-admin.guard';

describe('sAdminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
