import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO, RegisterDTO, User } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = '/api/auth';

  constructor(private http: HttpClient) {}

  register(dto: RegisterDTO): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/register`, dto);
  }

  login(dto: LoginDTO): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, dto);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`);
  }
}
