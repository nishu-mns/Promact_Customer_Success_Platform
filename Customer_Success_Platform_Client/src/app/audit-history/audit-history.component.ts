import { Component, OnInit } from '@angular/core';
import { AuditHistory } from '../Models/AuditHistory';
import { AuditHistoryService } from '../Service/audit-history.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuditHistoryEditModalComponent } from '../audit-history-edit-modal/audit-history-edit-modal.component';

@Component({
  selector: 'app-audit-history',
  templateUrl: './audit-history.component.html',
  styleUrls: ['./audit-history.component.css']
})
export class AuditHistoryComponent implements OnInit {
  
  constructor(private auditHistoryService: AuditHistoryService, 
    private modalService: NgbModal) { }

  auditHistories: AuditHistory[] = [];
  isNewRow: boolean = false;
  newAuditHistory: AuditHistory = {
    id: '',
    dateOfAudit: new Date(),
    reviewedBy: '',
    status: '',
    reviewedSection: '',
    commentQueries: '',
    actionItem: ''
  };
  
  ngOnInit(): void {
    this.getAuditHistories();
  }

  getAuditHistories(): void {
    this.auditHistoryService.getAuditHistories()
      .subscribe(histories => this.auditHistories = histories.items);
  }

  addNewRow(): void {
    this.isNewRow = true;
  }

  saveNewRow(): void {
    this.auditHistoryService.createAuditHistory(this.newAuditHistory)
      .subscribe(createdHistory => {
        console.log('New audit history created successfully:', createdHistory);
        this.auditHistories.push(createdHistory);
        this.isNewRow = false;
        this.newAuditHistory = {
          id: '',
          dateOfAudit: new Date(),
          reviewedBy: '',
          status: '',
          reviewedSection: '',
          commentQueries: '',
          actionItem: ''
        };
      }, error => {
        console.error('Error creating new audit history:', error);
      });
  }

  saveChanges(): void {
    
  }

  deleteAuditHistory(history: AuditHistory): void {
    if (confirm('Are you sure you want to delete this audit history?')) {
      this.auditHistoryService.deleteAuditHistory(history.id)
        .subscribe(() => {
          this.auditHistories = this.auditHistories.filter(h => h.id !== history.id);
        }, error => {
          console.error('Error deleting audit history:', error);
        });
    }
  }

  openEditModal(history: AuditHistory) {
    const modalRef = this.modalService.open(AuditHistoryEditModalComponent, { centered: true });
    modalRef.componentInstance.auditHistory = { ...history }; 
    modalRef.componentInstance.saveChangesEvent.subscribe((updatedHistory: AuditHistory) => {
      const index = this.auditHistories.findIndex(h => h.id === updatedHistory.id);
      if (index !== -1) {
        this.auditHistories[index] = updatedHistory; 
      }
    });
  }
}
