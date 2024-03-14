import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../Models/Project'; // Assuming you have a Project model

@Injectable({
  providedIn: 'root', // Makes the service available throughout the application
})
export class ProjectService {
  private apiUrl = 'https://localhost:44347/api/app/project'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
