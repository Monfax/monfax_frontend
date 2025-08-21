
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiThumbnailsService {
  private apiUrl = 'http://localhost:9000/api/documents'; // Adaptez l'URL de votre backend

  constructor(private http: HttpClient) { }

  uploadPdf(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    // L'API renvoie l'URL de la miniature directement.
    return this.http.post(this.apiUrl + '/upload', formData, { responseType: 'text' });
  }
}