import { TestBed } from '@angular/core/testing';

import { AutontiService } from './autonti.service';

describe('AutontiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutontiService = TestBed.get(AutontiService);
    expect(service).toBeTruthy();
  });
});
