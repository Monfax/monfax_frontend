import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Program } from '../models/program.model';
import { ProgramRequest } from '../requests/program-request.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private apiUrl = '/api/programs';

  constructor(private http: HttpClient) {}

  getAllPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(this.apiUrl);
  }

  getProgramById(id: number): Observable<Program> {
    return this.http.get<Program>(`${this.apiUrl}/${id}`);
  }

  createProgram(request: ProgramRequest): Observable<Program> {
    return this.http.post<Program>(this.apiUrl, request);
  }

  updateProgram(id: number, request: ProgramRequest): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${id}`, request);
  }

  deleteProgram(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
