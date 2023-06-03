import { TestBed } from '@angular/core/testing';

import { DetalleConvocatoriaService } from './detalle-convocatoria.service';

describe('DetalleConvocatoriaService', () => {
  let service: DetalleConvocatoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleConvocatoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
