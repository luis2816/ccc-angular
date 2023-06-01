import { TestBed } from '@angular/core/testing';

import { DetalleEventoService } from './detalle-evento.service';

describe('DetalleEventoService', () => {
  let service: DetalleEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
