import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperNoticiaComponent } from './swiper-noticia.component';

describe('SwiperNoticiaComponent', () => {
  let component: SwiperNoticiaComponent;
  let fixture: ComponentFixture<SwiperNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
