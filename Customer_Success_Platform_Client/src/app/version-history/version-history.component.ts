import { Component, OnInit } from '@angular/core';
import { VersionHistory } from '../Models/VersionHistory';
import { VersionHistoryService } from '../Service/version-history.service';

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

  constructor(private versionHistoryService: VersionHistoryService) { }

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

  editField(event: any, field: string, history: VersionHistory): void {
    const target = event.target;
    const value = target.textContent;
    target.innerHTML = `<input type='text' value='${value}' (blur)='updateValue($event, "${field}", ${history.id})'>`;
  }

  saveChanges(): void {
    this.versionHistories.forEach(history => {
      this.versionHistoryService.updateVersionHistory(history)
        .subscribe(updatedHistory => console.log('Version history updated successfully:', updatedHistory),
          error => console.error('Error updating version history:', error));
    });
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

  updateValue(event: any, field: keyof VersionHistory, id: string): void {
    const newValue = event.target.value.trim();
    const index = this.versionHistories.findIndex(h => h.id === id);
    if (index !== -1) {
      this.versionHistories[index][field] = newValue;
    }
  }
}
