import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EscalationMatrix } from '../Models/EscalationMatrix';

@Injectable({
  providedIn: 'root'
})
export class EscalationMatrixService {

  private apiUrl = 'https://localhost:44347/api/app/escalation-matrix-services'; 

  constructor(private http: HttpClient) { }

  getEscalationMatrixs(): Observable<{totalCount:number,items:EscalationMatrix[]}> {
    return this.http.get<{totalCount:number,items:EscalationMatrix[]}>(this.apiUrl);
  }

  getEscalationMatrixById(id: string): Observable<EscalationMatrix> {
    return this.http.get<EscalationMatrix>(`${this.apiUrl}/${id}`);
  }

  createEscalationMatrix(escalationMatrix: EscalationMatrix): Observable<EscalationMatrix> {
    return this.http.post<EscalationMatrix>(this.apiUrl, escalationMatrix);
  }

  updateEscalationMatrix(escalationMatrix: EscalationMatrix): Observable<EscalationMatrix> {
    return this.http.put<EscalationMatrix>(`${this.apiUrl}/${escalationMatrix.id}`, escalationMatrix);
  }

  deleteEscalationMatrix(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
