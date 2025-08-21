import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Correction } from '../models/correction.model';

@Injectable({ providedIn: 'root' })
export class CorrectionService {
  private apiUrl = '/api/corrections';

  constructor(private http: HttpClient) {}

  getAllCorrections(): Observable<Correction[]> {
    return this.http.get<Correction[]>(this.apiUrl);
  }

  getCorrectionById(id: number): Observable<Correction> {
    return this.http.get<Correction>(`${this.apiUrl}/${id}`);
  }

  createCorrection(formData: FormData): Observable<string> {
    return this.http.post<string>(this.apiUrl, formData);
  }

  updateCorrection(id: number, formData: FormData): Observable<Correction> {
    return this.http.put<Correction>(`${this.apiUrl}/${id}`, formData);
  }

  deleteCorrection(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }

  getTotalCorrections(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }
}
