import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VersionHistory } from '../Models/VersionHistory';

@Injectable({
  providedIn: 'root'
})
export class VersionHistoryService {
  private apiUrl = 'https://localhost:44347/api/app/version-history';

  constructor(private http: HttpClient) { }

  getVersionHistories(): Observable<{totalCount:number,items:VersionHistory[]}> {
    return this.http.get<{totalCount:number,items:VersionHistory[]}>(this.apiUrl);
  }

  getVersionHistoryById(id: string): Observable<VersionHistory> {
    return this.http.get<VersionHistory>(`${this.apiUrl}/${id}`);
  }

  createVersionHistory(versionHistory: VersionHistory): Observable<VersionHistory> {
    return this.http.post<VersionHistory>(this.apiUrl, versionHistory);
  }

  updateVersionHistory(versionHistory: VersionHistory): Observable<VersionHistory> {
    return this.http.put<VersionHistory>(`${this.apiUrl}/${versionHistory.id}`, versionHistory);
  }

  deleteVersionHistory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
