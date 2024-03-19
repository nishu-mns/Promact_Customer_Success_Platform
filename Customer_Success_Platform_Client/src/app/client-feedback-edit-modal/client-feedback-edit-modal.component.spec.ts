import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFeedbackEditModalComponent } from './client-feedback-edit-modal.component';

describe('ClientFeedbackEditModalComponent', () => {
  let component: ClientFeedbackEditModalComponent;
  let fixture: ComponentFixture<ClientFeedbackEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientFeedbackEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientFeedbackEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
