import { TestBed } from '@angular/core/testing';

import { SwiperNoticiaService } from './swiper-noticia.service';

describe('SwiperNoticiaService', () => {
  let service: SwiperNoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiperNoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
