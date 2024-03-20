import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VersionHistory } from '../Models/VersionHistory';
import { VersionHistoryService } from '../Service/version-history.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-version-history-edit-modal',
  templateUrl: './version-history-edit-modal.component.html',
  styleUrl: './version-history-edit-modal.component.css'
})
export class VersionHistoryEditModalComponent {
  @Input() versionHistory: any;

  @Output() saveChangesEvent = new EventEmitter<VersionHistory>();

  constructor(private versionHistoryService: VersionHistoryService,
    public activeModal: NgbActiveModal) {}

  saveChanges() {
    this.versionHistoryService.updateVersionHistory(this.versionHistory)
      .subscribe(updatedHistory => {
        console.log('Version history updated successfully:', updatedHistory);
        this.saveChangesEvent.emit(updatedHistory); 
        this.activeModal.close(); 
      }, error => {
        console.error('Error updating version history:', error);
      });
  }

  dismiss() {
    this.activeModal.dismiss('Dismissed');
  }

}
