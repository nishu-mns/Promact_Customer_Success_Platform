import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectBudget } from '../Models/ProjectBudget';
import { ProjectBudgetService } from '../Service/project-budget.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectBudgetEditModalComponent } from '../project-budget-edit-modal/project-budget-edit-modal.component';

@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrl: './project-budget.component.css'
})
export class ProjectBudgetComponent implements OnInit {

  projectbudget: ProjectBudget[] = [];
  isNewRow: boolean = false;
  newProjectBudget: ProjectBudget = {
    id: '',
    type:0,
    durationInMonths:0,
    budgetedHours:0,
    ContractDuration:0,
    BudgetedCost:0,
    Currency:'',
    ProjectId:''
  };

  constructor(private projectbudgetservice: ProjectBudgetService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getProjectBudget();
  }

  getProjectBudget() {
    this.projectbudgetservice.getProjectBudgets().subscribe(res => {
      this.projectbudget = res.items;
      // console.log(this.projectbudget);
      // console.log(res);
    })
  }

  saveChanges(): void {
    
  }

  deleteProjectBudget(projectBudget: ProjectBudget) {
    if (confirm('Are you sure you want to delete this project budget?')) {
      this.projectbudgetservice.deleteProjectBudget(projectBudget.id).subscribe(() => {
        this.projectbudget = this.projectbudget.filter(pb => pb.id !== projectBudget.id);
      });
    }
  }

  addNewRow() {
    this.isNewRow = true;
  }

  saveNewRow() {
    this.projectbudgetservice.createProjectBudget(this.newProjectBudget).subscribe(
      createdBudget => {
        console.log('New project budget created successfully:', createdBudget);
        this.projectbudget.push(createdBudget);
        this.isNewRow = false;
        this.newProjectBudget = {
          id: '',
          type: 0,
          durationInMonths: 0,
          budgetedHours: 0,
          ContractDuration: 0,
          BudgetedCost: 0,
          Currency: '',
          ProjectId: ''
        };
      },
      error => {
        console.error('Error creating new project budget:', error);
      }
    );
  }

  openEditModal(budget: ProjectBudget) {
    const modalRef = this.modalService.open(ProjectBudgetEditModalComponent, { centered: true });
    modalRef.componentInstance.projectBudget = { ...budget }; 
    modalRef.componentInstance.saveChangesEvent.subscribe((updatedbudget: ProjectBudget) => {
      const index = this.projectbudget.findIndex(h => h.id === updatedbudget.id);
      if (index !== -1) {
        this.projectbudget[index] = updatedbudget; 
      }
    });
  }

}
