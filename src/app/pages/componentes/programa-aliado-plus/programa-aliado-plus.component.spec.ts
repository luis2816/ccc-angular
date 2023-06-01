import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaAliadoPlusComponent } from './programa-aliado-plus.component';

describe('ProgramaAliadoPlusComponent', () => {
  let component: ProgramaAliadoPlusComponent;
  let fixture: ComponentFixture<ProgramaAliadoPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramaAliadoPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaAliadoPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
