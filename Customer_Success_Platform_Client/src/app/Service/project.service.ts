import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../Models/Project';

@Injectable({
  providedIn: 'root', // Makes the service available throughout the application
})
export class ProjectService {
  private apiUrl = 'https://localhost:44347/api/app/project';
  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<{totalCount:number,items:Project[]}> {
    return this.http.get<{totalCount:number,items:Project[]}>(this.apiUrl);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  
}
