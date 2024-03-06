import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectBudget } from '../Models/ProjectBudget';
import { ProjectBudgetService } from '../Service/project-budget.service';

@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrl: './project-budget.component.css'
})
export class ProjectBudgetComponent {

  projectbudget: Array<ProjectBudget> = [];

  constructor(private projectbudgetservice: ProjectBudgetService) { }

  ngOnInit() {
    this.getProjectBudget();
  }

  getProjectBudget() {
    this.projectbudgetservice.getProjectBudgets().subscribe(res => {
      this.projectbudget = res.items;
      console.log(this.projectbudget);
      console.log(res);
    })
  }

  editField(event: any, field: string, projectBudget: ProjectBudget) {
    const target = event.target;
    const value = target.textContent;
    target.innerHTML = `<input type='text' value='${value}' (blur)='updateValue($event, "${field}", ${projectBudget.id})'>`;
  }

  saveChanges() {
    this.projectbudget.forEach(projectBudget => {
      this.projectbudgetservice.updateProjectBudget(projectBudget).subscribe(
        updatedBudget => console.log('Project budget updated successfully:', updatedBudget),
        error => console.error('Error updating project budget:', error)
      );
    });

  }

  deleteProjectBudget(projectBudget: ProjectBudget) {
    if (confirm('Are you sure you want to delete this project budget?')) {
      this.projectbudgetservice.deleteProjectBudget(projectBudget.id).subscribe(() => {
        this.projectbudget = this.projectbudget.filter(pb => pb.id !== projectBudget.id);
      });
    }
  }

  updateValue(event: any, field: keyof ProjectBudget, id: string) {
    const newValue = event.target.value.trim(); // Trim any whitespace
    const index = this.projectbudget.findIndex(pb => pb.id === id);
    if (index !== -1) {
      // Use keyof to ensure the field exists on ProjectBudget interface
      this.projectbudget[index][field] = newValue;
    }
  }

  isNewRow: boolean = false;
  newProjectBudget: ProjectBudget = {
    id: '',
    type: 0,
    durationInMonths: 0,
    budgetedHours: 0,
    ContractDuration: 0,
    BudgetedCost: 0,
    Currency: '',
    ProjectId: ''
  };

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



}
