import { Component, OnInit } from '@angular/core';
import { VersionHistory } from '../Models/VersionHistory';
import { VersionHistoryService } from '../Service/version-history.service';
import { VersionHistoryEditModalComponent } from '../version-history-edit-modal/version-history-edit-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-version-history',
  templateUrl: './version-history.component.html',
  styleUrl: './version-history.component.css'
})
export class VersionHistoryComponent implements OnInit {
  versionHistories: VersionHistory[] = [];
  isNewRow: boolean = false;
  newVersionHistory: VersionHistory = {
    id: '',
    version: '',
    type: '',
    change: '',
    changeReason: '',
    createdBy: '',
    revisionDate: new Date(),
    approvalDate: new Date(),
    approvedBy: ''
  };

  constructor(private versionHistoryService: VersionHistoryService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getVersionHistories();
  }

  getVersionHistories(): void {
    this.versionHistoryService.getVersionHistories()
      .subscribe(histories => this.versionHistories = histories.items);
  }

  addNewRow(): void {
    this.isNewRow = true;
  }

  saveNewRow(): void {
    this.versionHistoryService.createVersionHistory(this.newVersionHistory)
      .subscribe(createdHistory => {
        console.log('New version history created successfully:', createdHistory);
        this.versionHistories.push(createdHistory);
        this.isNewRow = false;
        this.newVersionHistory = {
          id: '',
          version: '',
          type: '',
          change: '',
          changeReason: '',
          createdBy: '',
          revisionDate: new Date(),
          approvalDate: new Date(),
          approvedBy: ''
        };
      }, error => {
        console.error('Error creating new version history:', error);
      });
  }

  saveChanges(): void {
    
  }

  deleteVersionHistory(history: VersionHistory): void {
    if (confirm('Are you sure you want to delete this version history?')) {
      this.versionHistoryService.deleteVersionHistory(history.id)
        .subscribe(() => {
          this.versionHistories = this.versionHistories.filter(h => h.id !== history.id);
        }, error => {
          console.error('Error deleting version history:', error);
        });
    }
  }

  openEditModal(history: VersionHistory) {
    const modalRef = this.modalService.open(VersionHistoryEditModalComponent, { centered: true });
    modalRef.componentInstance.versionHistory = { ...history }; 
    modalRef.componentInstance.saveChangesEvent.subscribe((updatedHistory: VersionHistory) => {
      const index = this.versionHistories.findIndex(h => h.id === updatedHistory.id);
      if (index !== -1) {
        this.versionHistories[index] = updatedHistory; 
      }
    });
  }
}
