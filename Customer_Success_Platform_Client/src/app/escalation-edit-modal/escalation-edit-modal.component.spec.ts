import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalationEditModalComponent } from './escalation-edit-modal.component';

describe('EscalationEditModalComponent', () => {
  let component: EscalationEditModalComponent;
  let fixture: ComponentFixture<EscalationEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscalationEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscalationEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
