import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitividadRegionalComponent } from './competitividad-regional.component';

describe('CompetitividadRegionalComponent', () => {
  let component: CompetitividadRegionalComponent;
  let fixture: ComponentFixture<CompetitividadRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitividadRegionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitividadRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
