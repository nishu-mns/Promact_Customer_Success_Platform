import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhaseMilestone } from '../Models/PhaseMilestone';

@Injectable({
  providedIn: 'root'
})
export class PhaseMilestoneService {
  private apiUrl = 'https://localhost:44347/api/app/phase-milestone';
  constructor(private http: HttpClient) { }

  getPhaseMilestones(): Observable<{ totalCount: number, items: PhaseMilestone[] }> {
    return this.http.get<{ totalCount: number, items: PhaseMilestone[] }>(this.apiUrl);
  }

  getPhaseMilestoneById(id: number): Observable<{ totalCount: number, items: PhaseMilestone[] }> {
    return this.http.get<{ totalCount: number, items: PhaseMilestone[] }>(`${this.apiUrl}/${id}`);
  }

  createPhaseMilestone(phaseMilestone: PhaseMilestone): Observable<PhaseMilestone> {
    return this.http.post<PhaseMilestone>(this.apiUrl, phaseMilestone);
  }

  updatePhaseMilestone(phaseMilestone: PhaseMilestone): Observable<PhaseMilestone> {
    return this.http.put<PhaseMilestone>(`${this.apiUrl}/${phaseMilestone.id}`, phaseMilestone);
  }

  deletePhaseMilestone(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
