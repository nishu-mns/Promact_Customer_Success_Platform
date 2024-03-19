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

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}`);
  }

  createProject( projectData: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}`, projectData);
  }

  getProjectById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateProject(id: string, projectData: Project): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, projectData);
  }

  deleteProject( id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  
}
