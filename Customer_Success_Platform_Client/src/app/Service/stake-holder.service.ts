import { Injectable } from '@angular/core';
import { Stakeholder } from '../Models/StakeHolder';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StakeHolderService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://localhost:44347/api/app/stakholder';
  getAllStakeholders(): Observable<Stakeholder[]> {
    return this.http.get<Stakeholder[]>(`${this.apiUrl}`);
  }

  createStakeholder(stakeholderData: Stakeholder): Observable<Stakeholder> {
    return this.http.post<Stakeholder>(`${this.apiUrl}`, stakeholderData);
  }

  getStakeholderById(id: string): Observable<Stakeholder> {
    return this.http.get<Stakeholder>(`${this.apiUrl}/${id}`);
  }

  updateStakeholder(id: string, stakeholderData: Stakeholder): Observable<Stakeholder> {
    return this.http.put<Stakeholder>(`${this.apiUrl}/${id}`, stakeholderData);
  }

  deleteStakeholder(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
