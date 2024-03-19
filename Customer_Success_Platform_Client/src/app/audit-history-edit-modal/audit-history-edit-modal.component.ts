import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuditHistoryService } from '../Service/audit-history.service';
import { AuditHistory } from '../Models/AuditHistory';

@Component({
  selector: 'app-audit-history-edit-modal',
  templateUrl: './audit-history-edit-modal.component.html',
  styleUrls: ['./audit-history-edit-modal.component.css']
})
export class AuditHistoryEditModalComponent {
  @Input() auditHistory: any;

  @Output() saveChangesEvent = new EventEmitter<AuditHistory>();

  constructor(private auditHistoryService: AuditHistoryService,
    public activeModal: NgbActiveModal) {}

  saveChanges() {
    this.auditHistoryService.updateAuditHistory(this.auditHistory)
      .subscribe(updatedHistory => {
        console.log('Audit history updated successfully:', updatedHistory);
        this.saveChangesEvent.emit(updatedHistory); 
        this.activeModal.close(); 
      }, error => {
        console.error('Error updating audit history:', error);
      });
  }

  dismiss() {
    this.activeModal.dismiss('Dismissed');
  }
}
