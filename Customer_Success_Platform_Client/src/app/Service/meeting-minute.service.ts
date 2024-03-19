import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeetingMinute } from '../Models/MeetingMinute';

@Injectable({
  providedIn: 'root'
})
export class MeetingMinuteService {

  private apiUrl = 'https://localhost:44347/api/app/meeting-minute'; 

  constructor(private http: HttpClient) { }

  getMeetingMinutes(): Observable<{totalCount:number,items:MeetingMinute[]}> {
    return this.http.get<{totalCount:number,items:MeetingMinute[]}>(this.apiUrl);
  }

  getMeetingMinuteById(id: string): Observable<MeetingMinute> {
    return this.http.get<MeetingMinute>(`${this.apiUrl}/${id}`);
  }

  createMeetingMinute(meetingMinute: MeetingMinute): Observable<MeetingMinute> {
    return this.http.post<MeetingMinute>(this.apiUrl, meetingMinute);
  }

  updateMeetingMinute(meetingMinute: MeetingMinute): Observable<MeetingMinute> {
    return this.http.put<MeetingMinute>(`${this.apiUrl}/${meetingMinute.id}`, meetingMinute);
  }

  deleteMeetingMinute(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
