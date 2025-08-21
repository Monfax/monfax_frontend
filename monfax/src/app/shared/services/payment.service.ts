import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = '/api/payment';

  constructor(private http: HttpClient) {}

  buyVideo(id: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/buy/videos/${id}`, {});
  }

  buySubject(id: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/buy/subjects/${id}`, {});
  }

  buySemester(id: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/buy/semesters/${id}`, {});
  }

  buyCorrection(id: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/buy/corrections/${id}`, {});
  }

  buyLectureCourse(id: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/buy/lecture-courses/${id}`, {});
  }

  handleIpn(payload: any): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/ipn`, payload);
  }
}
