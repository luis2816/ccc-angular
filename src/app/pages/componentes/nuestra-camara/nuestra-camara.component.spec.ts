import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraCamaraComponent } from './nuestra-camara.component';

describe('NuestraCamaraComponent', () => {
  let component: NuestraCamaraComponent;
  let fixture: ComponentFixture<NuestraCamaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestraCamaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestraCamaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
