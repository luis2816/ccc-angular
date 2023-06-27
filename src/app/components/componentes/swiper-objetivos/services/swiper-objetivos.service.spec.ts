import { TestBed } from '@angular/core/testing';

import { SwiperObjetivosService } from './swiper-objetivos.service';

describe('SwiperObjetivosService', () => {
  let service: SwiperObjetivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiperObjetivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
