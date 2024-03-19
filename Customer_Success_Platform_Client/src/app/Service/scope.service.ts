import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scope } from '../Models/Scope';

@Injectable({
  providedIn: 'root'
})
export class ScopeService {

  private apiUrl = 'https://localhost:44347/api/app/scope'; 

  constructor(private http: HttpClient) { }

  getScopes(): Observable<{totalCount:number,items:Scope[]}> {
    return this.http.get<{totalCount:number,items:Scope[]}>(this.apiUrl);
  }

  getScopeById(id: string): Observable<Scope> {
    return this.http.get<Scope>(`${this.apiUrl}/${id}`);
  }

  createScope(scope: Scope): Observable<Scope> {
    return this.http.post<Scope>(this.apiUrl, scope);
  }

  updateScope(scope: Scope): Observable<Scope> {
    return this.http.put<Scope>(`${this.apiUrl}/${scope.id}`, scope);
  }

  deleteScope(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
