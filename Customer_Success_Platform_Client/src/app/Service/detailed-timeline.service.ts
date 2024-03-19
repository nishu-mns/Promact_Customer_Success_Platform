import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailedTimeline } from '../Models/DetailedTimeline';

@Injectable({
  providedIn: 'root'
})
export class DetailedTimelineService {

  private apiUrl = 'https://localhost:44347/api/app/detailed-timeline'; 

  constructor(private http: HttpClient) { }

  getDetailedTimelines(): Observable<{totalCount:number,items:DetailedTimeline[]}> {
    return this.http.get<{totalCount:number,items:DetailedTimeline[]}>(this.apiUrl);
  }

  getDetailedTimelineById(id: string): Observable<DetailedTimeline> {
    return this.http.get<DetailedTimeline>(`${this.apiUrl}/${id}`);
  }

  createDetailedTimeline(detailedTimeline: DetailedTimeline): Observable<DetailedTimeline> {
    return this.http.post<DetailedTimeline>(this.apiUrl, detailedTimeline);
  }

  updateDetailedTimeline(detailedTimeline: DetailedTimeline): Observable<DetailedTimeline> {
    return this.http.put<DetailedTimeline>(`${this.apiUrl}/${detailedTimeline.id}`, detailedTimeline);
  }

  deleteDetailedTimeline(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
