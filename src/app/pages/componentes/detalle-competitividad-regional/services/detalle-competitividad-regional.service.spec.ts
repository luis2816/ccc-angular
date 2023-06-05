import { TestBed } from '@angular/core/testing';

import { DetalleCompetitividadRegionalService } from './detalle-competitividad-regional.service';

describe('DetalleCompetitividadRegionalService', () => {
  let service: DetalleCompetitividadRegionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleCompetitividadRegionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
