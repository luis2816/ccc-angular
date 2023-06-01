import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperEventosComponent } from './swiper-eventos.component';

describe('SwiperEventosComponent', () => {
  let component: SwiperEventosComponent;
  let fixture: ComponentFixture<SwiperEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
