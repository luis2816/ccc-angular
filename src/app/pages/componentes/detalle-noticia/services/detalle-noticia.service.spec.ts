import { TestBed } from '@angular/core/testing';

import { DetalleNoticiaService } from './detalle-noticia.service';

describe('DetalleNoticiaService', () => {
  let service: DetalleNoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleNoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
