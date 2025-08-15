import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LectureCourse } from '../models/lecture-course.model';

@Injectable({
  providedIn: 'root'
})
export class LectureCourseService {
  private apiUrl = '/api/courses';

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<LectureCourse[]> {
    return this.http.get<LectureCourse[]>(this.apiUrl);
  }

  getCourseById(id: number): Observable<LectureCourse> {
    return this.http.get<LectureCourse>(`${this.apiUrl}/${id}`);
  }

  createCourse(formData: FormData): Observable<string> {
    return this.http.post<string>(this.apiUrl, formData);
  }

  updateCourse(id: number, formData: FormData): Observable<LectureCourse> {
    return this.http.put<LectureCourse>(`${this.apiUrl}/${id}`, formData);
  }

  deleteCourse(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }

  getTotalCourses(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }
}
