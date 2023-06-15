import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsFormularioComponent } from './pqrs-formulario.component';

describe('PqrsFormularioComponent', () => {
  let component: PqrsFormularioComponent;
  let fixture: ComponentFixture<PqrsFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PqrsFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PqrsFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
