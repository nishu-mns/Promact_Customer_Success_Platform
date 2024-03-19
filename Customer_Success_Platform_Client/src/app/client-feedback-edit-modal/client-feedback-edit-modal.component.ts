import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientFeedbackService } from '../Service/client-feedback.service';
import { ClientFeedback } from '../Models/ClientFeedback';

@Component({
  selector: 'app-client-feedback-edit-modal',
  templateUrl: './client-feedback-edit-modal.component.html',
  styleUrls: ['./client-feedback-edit-modal.component.css']
})
export class ClientFeedbackEditModalComponent {
  @Input() clientFeedback: any;

  @Output() saveChangesEvent = new EventEmitter<ClientFeedback>();

  constructor(private clientFeedbackService: ClientFeedbackService,
    public activeModal: NgbActiveModal) {}

  saveChanges() {
    this.clientFeedbackService.updateClientFeedback(this.clientFeedback)
      .subscribe(updatedFeedback => {
        console.log('Client feedback updated successfully:', updatedFeedback);
        this.saveChangesEvent.emit(updatedFeedback); 
        this.activeModal.close(); 
      }, error => {
        console.error('Error updating client feedback:', error);
      });
  }

  dismiss() {
    this.activeModal.dismiss('Dismissed');
  }
}
