import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperObjetivosComponent } from './swiper-objetivos.component';

describe('SwiperObjetivosComponent', () => {
  let component: SwiperObjetivosComponent;
  let fixture: ComponentFixture<SwiperObjetivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperObjetivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
