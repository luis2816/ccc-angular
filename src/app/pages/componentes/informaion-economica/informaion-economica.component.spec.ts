import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaionEconomicaComponent } from './informaion-economica.component';

describe('InformaionEconomicaComponent', () => {
  let component: InformaionEconomicaComponent;
  let fixture: ComponentFixture<InformaionEconomicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformaionEconomicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformaionEconomicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
