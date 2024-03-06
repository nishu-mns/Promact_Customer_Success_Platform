import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditHistoryEditModalComponent } from './audit-history-edit-modal.component';

describe('AuditHistoryEditModalComponent', () => {
  let component: AuditHistoryEditModalComponent;
  let fixture: ComponentFixture<AuditHistoryEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuditHistoryEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuditHistoryEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
