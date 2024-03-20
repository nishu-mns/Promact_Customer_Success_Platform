import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VersionHistory } from '../Models/VersionHistory';
import { VersionHistoryEditModalComponent } from '../version-history-edit-modal/version-history-edit-modal.component';
import { VersionHistoryService } from '../Service/version-history.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-version-history',
  templateUrl: './version-history.component.html',
  styleUrls: ['./version-history.component.css']
})
export class VersionHistoryComponent implements OnInit {
  projectId!: string;

  constructor(private versionHistoryService: VersionHistoryService,
    private modalService: NgbModal,
    private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.projectId = param['id'];
    })
  }

  versionHistories: VersionHistory[] = [];
  newVersionHistory: VersionHistory = {
    id: '',
    projectId: this.projectId,
    version: '',
    type: '',
    change: '',
    changeReason: '',
    createdBy: '',
    revisionDate: new Date(),
    approvalDate: new Date(),
    approvedBy: ''
  };
  isNewVersionHistory: boolean = false;

  ngOnInit(): void {
    this.getVersionHistories();
  }

  getVersionHistories(): void {
    this.versionHistoryService.getVersionHistories()
      .subscribe(histories => this.versionHistories = histories.items.filter((entry: VersionHistory) => entry.projectId === this.projectId));
  }

  addNewVersionHistory(): void {
    this.isNewVersionHistory = true;
  }

  saveNewVersionHistory(): void {
    this.versionHistoryService.createVersionHistory({ ...this.newVersionHistory, projectId: this.projectId })
      .subscribe(createdHistory => {
        this.versionHistories.push(createdHistory);
        this.isNewVersionHistory = false;
        this.newVersionHistory = {
          id: '',
          projectId: this.projectId,
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
    // Implement saving changes logic here
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
