import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject.model';
import { SubjectRequest } from '../requests/subject-request.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl = '/api/subjects';

  constructor(private http: HttpClient) {}

  getAllSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.apiUrl);
  }

  getSubjectById(id: number): Observable<Subject> {
    return this.http.get<Subject>(`${this.apiUrl}/${id}`);
  }

  createSubject(request: SubjectRequest): Observable<Subject> {
    return this.http.post<Subject>(this.apiUrl, request);
  }

  updateSubject(id: number, request: SubjectRequest): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${id}`, request);
  }

  deleteSubject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
