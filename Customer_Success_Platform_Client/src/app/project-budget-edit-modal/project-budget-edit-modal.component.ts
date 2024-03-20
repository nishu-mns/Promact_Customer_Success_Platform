import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectBudgetService } from '../Service/project-budget.service';
import { ProjectBudget } from '../Models/ProjectBudget';

@Component({
  selector: 'app-project-budget-edit-modal',
  templateUrl: './project-budget-edit-modal.component.html',
  styleUrls: ['./project-budget-edit-modal.component.css']
})
export class ProjectBudgetEditModalComponent {
  @Input() projectBudget: any;

  @Output() saveChangesEvent = new EventEmitter<ProjectBudget>();

  constructor(private projectBudgetService: ProjectBudgetService,
    public activeModal: NgbActiveModal) {}

  saveChanges() {
    this.projectBudgetService.updateProjectBudget(this.projectBudget)
      .subscribe(updatedBudget => {
        console.log('Project budget updated successfully:', updatedBudget);
        this.saveChangesEvent.emit(updatedBudget); 
        this.activeModal.close(); 
      }, error => {
        console.error('Error updating project budget:', error);
      });
  }

  dismiss() {
    this.activeModal.dismiss('Dismissed');
  }
}
