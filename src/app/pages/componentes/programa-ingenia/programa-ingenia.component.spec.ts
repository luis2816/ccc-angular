import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaIngeniaComponent } from './programa-ingenia.component';

describe('ProgramaIngeniaComponent', () => {
  let component: ProgramaIngeniaComponent;
  let fixture: ComponentFixture<ProgramaIngeniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramaIngeniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaIngeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
