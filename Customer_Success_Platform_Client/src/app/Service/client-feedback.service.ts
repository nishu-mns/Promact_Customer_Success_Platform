import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientFeedback } from '../Models/ClientFeedback';

@Injectable({
  providedIn: 'root'
})
export class ClientFeedbackService {

  private apiUrl = 'https://localhost:44347/api/app/client-feedback'; 

  constructor(private http: HttpClient) { }

  getClientFeedbacks(): Observable<{totalCount:number,items:ClientFeedback[]}> {
    return this.http.get<{totalCount:number,items:ClientFeedback[]}>(this.apiUrl);
  }

  getClientFeedbackById(id: string): Observable<ClientFeedback> {
    return this.http.get<ClientFeedback>(`${this.apiUrl}/${id}`);
  }

  createClientFeedback(approvedTeam: ClientFeedback): Observable<ClientFeedback> {
    return this.http.post<ClientFeedback>(this.apiUrl, approvedTeam);
  }

  updateClientFeedback(approvedTeam: ClientFeedback): Observable<ClientFeedback> {
    return this.http.put<ClientFeedback>(`${this.apiUrl}/${approvedTeam.id}`, approvedTeam);
  }

  deleteClientFeedback(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
