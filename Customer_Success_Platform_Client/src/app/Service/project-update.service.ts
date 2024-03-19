import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectUpdates } from '../Models/ProjectUpdate';

@Injectable({
  providedIn: 'root'
})
export class ProjectUpdateService {

  private apiUrl = 'https://localhost:44347/api/app/project-update'; 

  constructor(private http: HttpClient) { }

  getProjectUpdates(): Observable<{totalCount:number,items:ProjectUpdates[]}> {
    return this.http.get<{totalCount:number,items:ProjectUpdates[]}>(this.apiUrl);
  }

  getProjectUpdateById(id: string): Observable<ProjectUpdates> {
    return this.http.get<ProjectUpdates>(`${this.apiUrl}/${id}`);
  }

  createProjectUpdate(projectUpdate: ProjectUpdates): Observable<ProjectUpdates> {
    return this.http.post<ProjectUpdates>(this.apiUrl, projectUpdate);
  }

  updateProjectUpdate(projectUpdate: ProjectUpdates): Observable<ProjectUpdates> {
    return this.http.put<ProjectUpdates>(`${this.apiUrl}/${projectUpdate.id}`, projectUpdate);
  }

  deleteProjectUpdate(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
