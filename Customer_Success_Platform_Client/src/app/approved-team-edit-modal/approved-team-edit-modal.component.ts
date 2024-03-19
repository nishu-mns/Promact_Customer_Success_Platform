import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApprovedTeamService } from '../Service/approved-team.service';
import { ApprovedTeam } from '../Models/ApprovedTeam';

@Component({
  selector: 'app-approved-team-edit-modal',
  templateUrl: './approved-team-edit-modal.component.html',
  styleUrls: ['./approved-team-edit-modal.component.css']
})
export class ApprovedTeamEditModalComponent {
  @Input() approvedTeam: any;

  @Output() saveChangesEvent = new EventEmitter<ApprovedTeam>();

  constructor(private approvedTeamService: ApprovedTeamService,
    public activeModal: NgbActiveModal) {}

  saveChanges() {
    this.approvedTeamService.updateApprovedTeam(this.approvedTeam)
      .subscribe(updatedTeam => {
        console.log('Approved team updated successfully:', updatedTeam);
        this.saveChangesEvent.emit(updatedTeam); 
        this.activeModal.close(); 
      }, error => {
        console.error('Error updating approved team:', error);
      });
  }

  dismiss() {
    this.activeModal.dismiss('Dismissed');
  }
}
