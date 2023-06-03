import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleconvocatoriaComponent } from './detalleconvocatoria.component';

describe('DetalleconvocatoriaComponent', () => {
  let component: DetalleconvocatoriaComponent;
  let fixture: ComponentFixture<DetalleconvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleconvocatoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleconvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
