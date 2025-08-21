import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = '/api/videos';

  constructor(private http: HttpClient) {}

  getAllVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }

  getVideoById(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.apiUrl}/${id}`);
  }

  createVideo(formData: FormData): Observable<string> {
    return this.http.post<string>(this.apiUrl, formData);
  }

  updateVideo(id: number, formData: FormData): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${id}`, formData);
  }

  deleteVideo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getTotalVideo(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }
}
