import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectBudget } from '../Models/ProjectBudget';

@Injectable({
  providedIn: 'root'
})
export class ProjectBudgetService {
  private apiUrl = 'https://localhost:44347/api/app/project-budget';
  constructor(private http:HttpClient) { }

  getProjectBudgets():Observable<{totalCount:number,items:ProjectBudget[]}>{
    return this.http.get<{totalCount:number,items:ProjectBudget[]}>(this.apiUrl);
  }

  getProjectBudgetById(id: string): Observable<ProjectBudget> {
    return this.http.get<ProjectBudget>(`${this.apiUrl}/${id}`);
  }

  createProjectBudget(projectBudget: ProjectBudget): Observable<ProjectBudget> {
    return this.http.post<ProjectBudget>(this.apiUrl, projectBudget);
  }

  updateProjectBudget(projectBudget: ProjectBudget): Observable<ProjectBudget> {
    return this.http.put<ProjectBudget>(`${this.apiUrl}/${projectBudget.id}`, projectBudget);
  }

  deleteProjectBudget(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
