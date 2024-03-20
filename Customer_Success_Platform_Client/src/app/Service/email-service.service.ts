import { Injectable } from '@angular/core';
import { Email } from '../Models/Email';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private apiURL = 'https://localhost:44347/api/Email/send';

  constructor(private http: HttpClient) {}

  sendEmails(emails: Email[]): Observable<any> {
    console.log(emails);
    
    if (!emails || emails.length === 0) {
      throw new Error('At least one email should be provided');
    }
    return this.http.post<any>(this.apiURL, emails);
  }
}
