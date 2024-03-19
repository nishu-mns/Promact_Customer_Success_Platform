import { Component, OnInit } from '@angular/core';
import { ClientFeedback } from '../Models/ClientFeedback';
import { ClientFeedbackService } from '../Service/client-feedback.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ClientFeedbackEditModalComponent } from '../client-feedback-edit-modal/client-feedback-edit-modal.component';

@Component({
  selector: 'app-client-feedback',
  templateUrl: './client-feedback.component.html',
  styleUrls: ['./client-feedback.component.css']
})
export class ClientFeedbackComponent implements OnInit {
  projectId!: string;
  constructor(private clientFeedbackService: ClientFeedbackService, private modalService: NgbModal, private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.projectId = param['id'];
      console.log(this.projectId);

    })
  }

  clientFeedbacks: ClientFeedback[] = [];
  newFeedback: ClientFeedback = {
    id: '',
    projectId: this.projectId,
    feedbackType: '',
    dateReceived: new Date(),
    detailedFeedback: '',
    actionTaken: '',
    closureDate: new Date()
  };
  isNewFeedback: boolean = false;

  ngOnInit(): void {
    this.getClientFeedbacks();
  }

  getClientFeedbacks(): void {
    this.clientFeedbackService.getClientFeedbacks()
      .subscribe(feedbacks => this.clientFeedbacks = feedbacks.items.filter((entry: ClientFeedback) => entry.projectId === this.projectId));
  }

  addNewFeedback(): void {
    this.isNewFeedback = true;
  }

  saveNewFeedback(): void {
    this.clientFeedbackService.createClientFeedback({...this.newFeedback,projectId:this.projectId})
      .subscribe(createdFeedback => {
        this.clientFeedbacks.push(createdFeedback);
        this.isNewFeedback = false;
        this.newFeedback = {
          id: '',
          projectId: this.projectId,
          feedbackType: '',
          dateReceived: new Date(),
          detailedFeedback: '',
          actionTaken: '',
          closureDate: new Date()
        };
      }, error => {
        console.error('Error creating new client feedback:', error);
      });
  }

  saveChanges(): void {
    
  }

  deleteClientFeedback(feedback: ClientFeedback): void {
    if (confirm('Are you sure you want to delete this feedback?')) {
      this.clientFeedbackService.deleteClientFeedback(feedback.id)
        .subscribe(() => {
          this.clientFeedbacks = this.clientFeedbacks.filter(f => f.id !== feedback.id);
        }, error => {
          console.error('Error deleting client feedback:', error);
        });
    }
  }

  openEditModal(feedback: ClientFeedback) {
    const modalRef = this.modalService.open(ClientFeedbackEditModalComponent, { centered: true });
    modalRef.componentInstance.clientFeedback = { ...feedback };
    modalRef.componentInstance.saveChangesEvent.subscribe((updatedFeedback: ClientFeedback) => {
      const index = this.clientFeedbacks.findIndex(f => f.id === updatedFeedback.id);
      if (index !== -1) {
        this.clientFeedbacks[index] = updatedFeedback;
      }
    });
  }
}
