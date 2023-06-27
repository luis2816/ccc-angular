import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperProgramasComponent } from './swiper-programas.component';

describe('SwiperProgramasComponent', () => {
  let component: SwiperProgramasComponent;
  let fixture: ComponentFixture<SwiperProgramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperProgramasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
