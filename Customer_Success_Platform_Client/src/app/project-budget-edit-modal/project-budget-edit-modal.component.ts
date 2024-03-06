import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectBudget } from '../Models/ProjectBudget';
import { ProjectBudgetService } from '../Service/project-budget.service';

@Component({
  selector: 'app-project-budget-edit-modal',
  templateUrl: './project-budget-edit-modal.component.html',
  styleUrl: './project-budget-edit-modal.component.css'
})
export class ProjectBudgetEditModalComponent {
  @Input() projectBudget: ProjectBudget = {
    id: '',
    type: 0,
    durationInMonths: 0,
    budgetedHours: 0,
    ContractDuration: 0,
    BudgetedCost: 0,
    Currency: '',
    ProjectId: ''
  };

  @Output() saveChangesEvent = new EventEmitter<ProjectBudget>();

  constructor(private projectBudgetService: ProjectBudgetService,
    public activeModal: NgbActiveModal) { }

  saveChanges() {
    this.projectBudgetService.updateProjectBudget(this.projectBudget)
      .subscribe(updatedbudget => {
        console.log('Project Budget updated successfully:', updatedbudget);
        this.saveChangesEvent.emit(updatedbudget);
        this.activeModal.close();
      }, error => {
        console.error('Error updating project budget:', error);
      });
  }

  dismiss() {
    this.activeModal.dismiss('Dismissed');
  }
}
