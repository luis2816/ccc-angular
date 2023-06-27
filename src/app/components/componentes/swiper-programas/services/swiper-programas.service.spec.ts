import { TestBed } from '@angular/core/testing';

import { SwiperProgramasService } from './swiper-programas.service';

describe('SwiperProgramasService', () => {
  let service: SwiperProgramasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiperProgramasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
