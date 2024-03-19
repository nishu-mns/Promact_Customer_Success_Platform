import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditHistory } from '../Models/AuditHistory';

@Injectable({
  providedIn: 'root'
})
export class AuditHistoryService {
  private apiUrl = 'https://localhost:44347/api/app/audit-history'; 

  constructor(private http: HttpClient) { }

  getAuditHistories(): Observable<{totalCount:number,items:AuditHistory[]}> {
    return this.http.get<{totalCount:number,items:AuditHistory[]}>(this.apiUrl);
  }

  getAuditHistoryById(id: string): Observable<AuditHistory> {
    return this.http.get<AuditHistory>(`${this.apiUrl}/${id}`);
  }

  createAuditHistory(auditHistory: AuditHistory): Observable<AuditHistory> {
    return this.http.post<AuditHistory>(this.apiUrl, auditHistory);
  }

  updateAuditHistory(auditHistory: AuditHistory): Observable<AuditHistory> {
    return this.http.put<AuditHistory>(`${this.apiUrl}/${auditHistory.id}`, auditHistory);
  }

  deleteAuditHistory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
