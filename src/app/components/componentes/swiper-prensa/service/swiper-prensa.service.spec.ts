import { TestBed } from '@angular/core/testing';

import { SwiperPrensaService } from './swiper-prensa.service';

describe('SwiperPrensaService', () => {
  let service: SwiperPrensaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiperPrensaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
