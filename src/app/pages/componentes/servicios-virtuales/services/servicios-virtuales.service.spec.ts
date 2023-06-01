import { TestBed } from '@angular/core/testing';

import { ServiciosVirtualesService } from './servicios-virtuales.service';

describe('ServiciosVirtualesService', () => {
  let service: ServiciosVirtualesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosVirtualesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
