import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EscalationMatrixService } from '../Service/escalation-matrix.service';
import { EscalationMatrix } from '../Models/EscalationMatrix';

@Component({
  selector: 'app-escalation-edit-modal',
  templateUrl: './escalation-edit-modal.component.html',
  styleUrls: ['./escalation-edit-modal.component.css']
})
export class EscalationMatrixEditModalComponent {
  @Input() escalationMatrix: any;

  @Output() saveChangesEvent = new EventEmitter<EscalationMatrix>();

  constructor(private escalationMatrixService: EscalationMatrixService,
    public activeModal: NgbActiveModal) {}

  saveChanges() {
    this.escalationMatrixService.updateEscalationMatrix(this.escalationMatrix)
      .subscribe(updatedMatrix => {
        console.log('Escalation matrix updated successfully:', updatedMatrix);
        this.saveChangesEvent.emit(updatedMatrix); 
        this.activeModal.close(); 
      }, error => {
        console.error('Error updating escalation matrix:', error);
      });
  }

  dismiss() {
    this.activeModal.dismiss('Dismissed');
  }
}
