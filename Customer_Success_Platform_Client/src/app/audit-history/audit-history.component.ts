import { Component, OnInit } from '@angular/core';
import { AuditHistory } from '../Models/AuditHistory';
import { AuditHistoryService } from '../Service/audit-history.service';

@Component({
  selector: 'app-audit-history',
  templateUrl: './audit-history.component.html',
  styleUrls: ['./audit-history.component.css']
})
export class AuditHistoryComponent implements OnInit {
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

  constructor(private auditHistoryService: AuditHistoryService) { }

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

  editField(event: any, field: string, history: AuditHistory): void {
    const target = event.target;
    const value = target.textContent;
    target.innerHTML = `<input type='text' value='${value}' (blur)='updateValue($event, "${field}", "${history.id}")'>`;
  }

  saveChanges(): void {
    this.auditHistories.forEach(history => {
      this.auditHistoryService.updateAuditHistory(history)
        .subscribe(updatedHistory => console.log('Audit history updated successfully:', updatedHistory),
          error => console.error('Error updating audit history:', error));
    });
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

  updateValue(event: any, field: keyof AuditHistory, id: string): void {
    const newValue = event.target.value.trim();
    console.log(newValue);
    console.log(id);
    
    const index = this.auditHistories.findIndex(h => h.id === id);
    if (index !== -1) {
      this.auditHistories[index][field] = newValue;
    }
  }
}
