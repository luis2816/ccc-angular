import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperSlideEventosComponent } from './swiper-slide-eventos.component';

describe('SwiperSlideEventosComponent', () => {
  let component: SwiperSlideEventosComponent;
  let fixture: ComponentFixture<SwiperSlideEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperSlideEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperSlideEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
