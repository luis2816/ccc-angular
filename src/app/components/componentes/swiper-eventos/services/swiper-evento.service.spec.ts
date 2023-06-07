import { TestBed } from '@angular/core/testing';

import { SwiperEventoService } from './swiper-evento.service';

describe('SwiperEventoService', () => {
  let service: SwiperEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiperEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
