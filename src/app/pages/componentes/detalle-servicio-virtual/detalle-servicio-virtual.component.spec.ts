import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleServicioVirtualComponent } from './detalle-servicio-virtual.component';

describe('DetalleServicioVirtualComponent', () => {
  let component: DetalleServicioVirtualComponent;
  let fixture: ComponentFixture<DetalleServicioVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleServicioVirtualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleServicioVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
