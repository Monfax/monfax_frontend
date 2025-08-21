import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faculty } from '../models/faculty.model';
import { FacultyRequest } from '../requests/faculty-request.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private apiUrl = '/api/faculties';

  constructor(private http: HttpClient) {}

  getAllFaculties(): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(this.apiUrl);
  }

  getFacultyById(id: number): Observable<Faculty> {
    return this.http.get<Faculty>(`${this.apiUrl}/${id}`);
  }

  createFaculty(request: FacultyRequest): Observable<Faculty> {
    return this.http.post<Faculty>(this.apiUrl, request);
  }

  updateFaculty(id: number, request: FacultyRequest): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${id}`, request);
  }

  deleteFaculty(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
