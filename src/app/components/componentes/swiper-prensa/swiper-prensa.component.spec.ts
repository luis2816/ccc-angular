import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperPrensaComponent } from './swiper-prensa.component';

describe('SwiperPrensaComponent', () => {
  let component: SwiperPrensaComponent;
  let fixture: ComponentFixture<SwiperPrensaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperPrensaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperPrensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
