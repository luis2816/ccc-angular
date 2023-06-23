import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingEmpresaComponent } from './ranking-empresa.component';

describe('RankingEmpresaComponent', () => {
  let component: RankingEmpresaComponent;
  let fixture: ComponentFixture<RankingEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
