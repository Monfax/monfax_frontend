// src/app/core/services/pdf-thumbnail.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExamWithThumbnail } from '../../shared/models/exam.model';

@Injectable({
  providedIn: 'root',
})
export class PdfThumbnailService {
  private apiUrl = 'https://localhost:9000/api/exams'; 

  constructor(private http: HttpClient) {}

  // Cette méthode récupère la liste complète des documents, miniatures incluses.
  getExamsWithThumbnails(): Observable<ExamWithThumbnail[]> {
    return this.http.get<ExamWithThumbnail[]>(this.apiUrl);
  }
}