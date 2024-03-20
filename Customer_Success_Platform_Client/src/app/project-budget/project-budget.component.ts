import { Component, OnInit } from '@angular/core';
import { ProjectBudget } from '../Models/ProjectBudget';
import { ProjectBudgetService } from '../Service/project-budget.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ProjectBudgetEditModalComponent } from '../project-budget-edit-modal/project-budget-edit-modal.component';

@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrls: ['./project-budget.component.css']
})
export class ProjectBudgetComponent implements OnInit {
  projectId!: string;
  constructor(private projectBudgetService: ProjectBudgetService, private modalService: NgbModal, private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.projectId = param['id'];
      console.log(this.projectId);

    })
  }

  projectBudgets: ProjectBudget[] = [];
  newBudget: ProjectBudget = {
    id: '',
    type: 0,
    durationInMonths: 0,
    budgetedHours: 0,
    contractDuration: 0,
    budgetedCost: 0,
    currency: '',
    projectId: this.projectId
  };
  isNewBudget: boolean = false;

  ngOnInit(): void {
    this.getProjectBudgets();
  }

  getProjectBudgets(): void {
    this.projectBudgetService.getProjectBudgets()
      .subscribe(budgets => this.projectBudgets = budgets.items.filter((entry: ProjectBudget) => entry.projectId === this.projectId));
  }

  addNewBudget(): void {
    this.isNewBudget = true;
  }

  saveNewBudget(): void {
    this.projectBudgetService.createProjectBudget({ ...this.newBudget, projectId: this.projectId })
      .subscribe(createdBudget => {
        this.projectBudgets.push(createdBudget);
        this.isNewBudget = false;
        this.newBudget = {
          id: '',
          type: 0,
          durationInMonths: 0,
          budgetedHours: 0,
          contractDuration: 0,
          budgetedCost: 0,
          currency: '',
          projectId: this.projectId
        };
      }, error => {
        console.error('Error creating new project budget:', error);
      });
  }

  saveChanges(): void {
    // Implement saving changes logic here
  }

  deleteProjectBudget(budget: ProjectBudget): void {
    if (confirm('Are you sure you want to delete this project budget?')) {
      this.projectBudgetService.deleteProjectBudget(budget.id)
        .subscribe(() => {
          this.projectBudgets = this.projectBudgets.filter(b => b.id !== budget.id);
        }, error => {
          console.error('Error deleting project budget:', error);
        });
    }
  }

  openEditModal(budget: ProjectBudget) {
    const modalRef = this.modalService.open(ProjectBudgetEditModalComponent, { centered: true });
    modalRef.componentInstance.projectBudget = { ...budget };
    modalRef.componentInstance.saveChangesEvent.subscribe((updatedBudget: ProjectBudget) => {
      const index = this.projectBudgets.findIndex(b => b.id === updatedBudget.id);
      if (index !== -1) {
        this.projectBudgets[index] = updatedBudget;
      }
    });
  }
}
