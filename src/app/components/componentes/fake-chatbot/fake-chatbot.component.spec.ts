import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeChatbotComponent } from './fake-chatbot.component';

describe('FakeChatbotComponent', () => {
  let component: FakeChatbotComponent;
  let fixture: ComponentFixture<FakeChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeChatbotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
