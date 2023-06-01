import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosVirtualesComponent } from './servicios-virtuales.component';

describe('ServiciosVirtualesComponent', () => {
  let component: ServiciosVirtualesComponent;
  let fixture: ComponentFixture<ServiciosVirtualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosVirtualesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosVirtualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
