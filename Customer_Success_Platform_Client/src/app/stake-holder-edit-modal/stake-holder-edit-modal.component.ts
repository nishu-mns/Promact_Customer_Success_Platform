import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StakeHolderService } from '../Service/stake-holder.service';
import { Stakeholder } from '../Models/StakeHolder';

@Component({
  selector: 'app-stakeholder-edit-modal',
  templateUrl: './stake-holder-edit-modal.component.html',
  styleUrls: ['./stake-holder-edit-modal.component.css']
})
export class StakeholderEditModalComponent {
  @Input() stakeholder: any;

  @Output() saveChangesEvent = new EventEmitter<Stakeholder>();

  constructor(private stakeholderService: StakeHolderService,
    public activeModal: NgbActiveModal) {}

  saveChanges() {
    this.stakeholderService.updateStakeholder(this.stakeholder)
      .subscribe(updatedStakeholder => {
        console.log('Stakeholder updated successfully:', updatedStakeholder);
        this.saveChangesEvent.emit(updatedStakeholder); 
        this.activeModal.close(); 
      }, error => {
        console.error('Error updating stakeholder:', error);
      });
  }

  dismiss() {
    this.activeModal.dismiss('Dismissed');
  }
}
