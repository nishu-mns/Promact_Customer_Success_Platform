import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PhaseMilestone } from '../Models/PhaseMilestone';
import { PhaseMilestoneService } from '../Service/phaseMilestone.service';

@Component({
  selector: 'app-phase-milestone-edit-modal',
  templateUrl: './phase-milestone-edit-modal.component.html',
  styleUrls: ['./phase-milestone-edit-modal.component.css']
})
export class PhaseMilestoneEditModalComponent {
  @Input() phaseMilestone: PhaseMilestone = {
    Id: '',
    ProjectId: '',
    Title: '',
    StartDate: new Date(),
    EndDate: new Date(),
    Description: '',
    Comments: ''
  };

  @Output() saveChangesEvent = new EventEmitter<PhaseMilestone>();

  constructor(private phaseMilestoneService: PhaseMilestoneService,
    public activeModal: NgbActiveModal) { }

  saveChanges() {
    this.phaseMilestoneService.updatePhaseMilestone(this.phaseMilestone)
      .subscribe(updatedMilestone => {
        this.saveChangesEvent.emit(updatedMilestone);
        this.activeModal.close();
      }, error => {
        console.error('Error updating phase milestone:', error);
      });
  }

  dismiss() {
    this.activeModal.dismiss('Dismissed');
  }
}
