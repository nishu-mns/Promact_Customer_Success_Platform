import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sprint } from '../Models/Sprint';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  private apiUrl = 'https://localhost:44347/api/app/sprint'; 

  constructor(private http: HttpClient) { }

  getSprints(): Observable<{totalCount:number,items:Sprint[]}> {
    return this.http.get<{totalCount:number,items:Sprint[]}>(this.apiUrl);
  }

  getSprintById(id: string): Observable<Sprint> {
    return this.http.get<Sprint>(`${this.apiUrl}/${id}`);
  }

  createSprint(sprint: Sprint): Observable<Sprint> {
    return this.http.post<Sprint>(this.apiUrl, sprint);
  }

  updateSprint(sprint: Sprint): Observable<Sprint> {
    return this.http.put<Sprint>(`${this.apiUrl}/${sprint.id}`, sprint);
  }

  deleteSprint(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
