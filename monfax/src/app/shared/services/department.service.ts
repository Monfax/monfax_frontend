import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  private apiUrl = '/api/departments';

  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${id}`);
  }

  createDepartment(request: { name: string }): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, request);
  }

  updateDepartment(id: number, request: { name: string }): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${id}`, request);
  }

  deleteDepartment(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
