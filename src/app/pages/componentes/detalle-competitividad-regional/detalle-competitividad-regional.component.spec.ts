import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCompetitividadRegionalComponent } from './detalle-competitividad-regional.component';

describe('DetalleCompetitividadRegionalComponent', () => {
  let component: DetalleCompetitividadRegionalComponent;
  let fixture: ComponentFixture<DetalleCompetitividadRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCompetitividadRegionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCompetitividadRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
