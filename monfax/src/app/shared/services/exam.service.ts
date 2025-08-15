import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exam } from '../models/exam.model';
import { ExamType } from '../models/exam-type.enum';

@Injectable({ providedIn: 'root' })
export class ExamService {
  private apiUrl = '/api/exams';

  constructor(private http: HttpClient) {}

  getAllExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.apiUrl);
  }

  getExamById(id: number): Observable<Exam> {
    return this.http.get<Exam>(`${this.apiUrl}/${id}`);
  }

  createExam(formData: FormData): Observable<string> {
    return this.http.post<string>(this.apiUrl, formData);
  }

  updateExam(id: number, formData: FormData): Observable<Exam> {
    return this.http.put<Exam>(`${this.apiUrl}/${id}`, formData);
  }

  deleteExam(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }

  getExamsBySubjectId(subjectId: number): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${this.apiUrl}/subject/${subjectId}`);
  }

  getExamsCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }

  getExamsCountByType(type: ExamType): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count-by-type/${type}`);
  }
}
