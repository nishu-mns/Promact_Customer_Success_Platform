import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectResource } from '../Models/ProjectResource';

@Injectable({
  providedIn: 'root'
})
export class ProjectResourceService {

  private apiUrl = 'https://localhost:44347/api/app/project-resource'; 

  constructor(private http: HttpClient) { }

  getProjectResources(): Observable<{totalCount:number,items:ProjectResource[]}> {
    return this.http.get<{totalCount:number,items:ProjectResource[]}>(this.apiUrl);
  }

  getProjectResourceById(id: string): Observable<ProjectResource> {
    return this.http.get<ProjectResource>(`${this.apiUrl}/${id}`);
  }

  createProjectResource(projectResource: ProjectResource): Observable<ProjectResource> {
    return this.http.post<ProjectResource>(this.apiUrl, projectResource);
  }

  updateProjectResource(projectResource: ProjectResource): Observable<ProjectResource> {
    return this.http.put<ProjectResource>(`${this.apiUrl}/${projectResource.id}`, projectResource);
  }

  deleteProjectResource(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
