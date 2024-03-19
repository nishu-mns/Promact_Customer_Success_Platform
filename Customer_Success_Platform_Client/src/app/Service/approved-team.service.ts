import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApprovedTeam } from '../Models/ApprovedTeam';

@Injectable({
  providedIn: 'root'
})
export class ApprovedTeamService {

  private apiUrl = 'https://localhost:44347/api/app/approved-team'; 

  constructor(private http: HttpClient) { }

  getApprovedTeams(): Observable<{totalCount:number,items:ApprovedTeam[]}> {
    return this.http.get<{totalCount:number,items:ApprovedTeam[]}>(this.apiUrl);
  }

  getApprovedTeamById(id: string): Observable<ApprovedTeam> {
    return this.http.get<ApprovedTeam>(`${this.apiUrl}/${id}`);
  }

  createApprovedTeam(approvedTeam: ApprovedTeam): Observable<ApprovedTeam> {
    return this.http.post<ApprovedTeam>(this.apiUrl, approvedTeam);
  }

  updateApprovedTeam(approvedTeam: ApprovedTeam): Observable<ApprovedTeam> {
    return this.http.put<ApprovedTeam>(`${this.apiUrl}/${approvedTeam.id}`, approvedTeam);
  }

  deleteApprovedTeam(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
