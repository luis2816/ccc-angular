import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroConciliacionComponent } from './centro-conciliacion.component';

describe('CentroConciliacionComponent', () => {
  let component: CentroConciliacionComponent;
  let fixture: ComponentFixture<CentroConciliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroConciliacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroConciliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
