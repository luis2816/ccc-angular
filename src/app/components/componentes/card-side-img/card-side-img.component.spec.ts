import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSideImgComponent } from './card-side-img.component';

describe('CardSideImgComponent', () => {
  let component: CardSideImgComponent;
  let fixture: ComponentFixture<CardSideImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSideImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSideImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
