import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RiskProfiling } from '../Models/RiskProfiling';

@Injectable({
  providedIn: 'root'
})
export class RiskProfilingService {

  private apiUrl = 'https://localhost:44347/api/app/risk-profile'; 

  constructor(private http: HttpClient) { }

  getRiskProfilings(): Observable<{totalCount:number,items:RiskProfiling[]}> {
    return this.http.get<{totalCount:number,items:RiskProfiling[]}>(this.apiUrl);
  }

  getRiskProfilingById(id: string): Observable<RiskProfiling> {
    return this.http.get<RiskProfiling>(`${this.apiUrl}/${id}`);
  }

  createRiskProfiling(riskProfiling: RiskProfiling): Observable<RiskProfiling> {
    return this.http.post<RiskProfiling>(this.apiUrl, riskProfiling);
  }

  updateRiskProfiling(riskProfiling: RiskProfiling): Observable<RiskProfiling> {
    return this.http.put<RiskProfiling>(`${this.apiUrl}/${riskProfiling.id}`, riskProfiling);
  }

  deleteRiskProfiling(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
