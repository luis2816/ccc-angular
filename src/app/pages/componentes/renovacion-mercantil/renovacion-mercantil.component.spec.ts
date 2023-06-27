import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovacionMercantilComponent } from './renovacion-mercantil.component';

describe('RenovacionMercantilComponent', () => {
  let component: RenovacionMercantilComponent;
  let fixture: ComponentFixture<RenovacionMercantilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenovacionMercantilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenovacionMercantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
