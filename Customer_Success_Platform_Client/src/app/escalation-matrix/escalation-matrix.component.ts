import { Component, OnInit } from '@angular/core';
import { EscalationMatrix } from '../Models/EscalationMatrix';
import { EscalationMatrixService } from '../Service/escalation-matrix.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { EscalationMatrixEditModalComponent } from '../escalation-edit-modal/escalation-edit-modal.component';

@Component({
  selector: 'app-escalation-matrix',
  templateUrl: './escalation-matrix.component.html',
  styleUrls: ['./escalation-matrix.component.css']
})
export class EscalationMatrixComponent implements OnInit {
  projectId!: string;
  escalationMatrices: EscalationMatrix[] = [];
  newMatrix: EscalationMatrix = {
    id: '',
    projectId: this.projectId,
    level: '',
    escalationType: ''
  };
  isNewMatrix: boolean = false;

  constructor(private escalationMatrixService: EscalationMatrixService, private modalService: NgbModal, private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.projectId = param['id'];
      console.log(this.projectId);

    })
  }

  ngOnInit(): void {
    this.getEscalationMatrices();
  }

  getEscalationMatrices(): void {
    this.escalationMatrixService.getEscalationMatrixs()
      .subscribe(matrices => this.escalationMatrices = matrices.items.filter((entry: EscalationMatrix) => entry.projectId === this.projectId));
  }

  addNewMatrix(): void {
    this.isNewMatrix = true;
  }

  saveNewMatrix(): void {
    // Save the new matrix using the service
    this.escalationMatrixService.createEscalationMatrix({...this.newMatrix, projectId: this.projectId})
      .subscribe(createdMatrix => {
        // Add the created matrix to the list and reset fields
        this.escalationMatrices.push(createdMatrix);
        this.isNewMatrix = false;
        this.newMatrix = {
          id: '',
          projectId: this.projectId,
          level: '',
          escalationType: ''
        };
      }, error => {
        console.error('Error creating new escalation matrix:', error);
      });
  }

  deleteEscalationMatrix(matrix: EscalationMatrix): void {
    // Delete a matrix using the service
    if (confirm('Are you sure you want to delete this matrix?')) {
      this.escalationMatrixService.deleteEscalationMatrix(matrix.id)
        .subscribe(() => {
          // Remove the matrix from the list
          this.escalationMatrices = this.escalationMatrices.filter(m => m.id !== matrix.id);
        }, error => {
          console.error('Error deleting escalation matrix:', error);
        });
    }
  }

  openEditModal(matrix: EscalationMatrix) {
    // Open the edit modal for a matrix
    const modalRef = this.modalService.open(EscalationMatrixEditModalComponent, { centered: true });
    modalRef.componentInstance.escalationMatrix = { ...matrix };
    modalRef.componentInstance.saveChangesEvent.subscribe((updatedMatrix: EscalationMatrix) => {
      // Update the matrix in the list
      const index = this.escalationMatrices.findIndex(m => m.id === updatedMatrix.id);
      if (index !== -1) {
        this.escalationMatrices[index] = updatedMatrix;
      }
    });
  }
}
