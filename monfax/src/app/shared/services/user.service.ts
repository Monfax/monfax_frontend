import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  numberUsers(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }

  getUsersRegisteredLast30Days(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/registrations/last-30-days`);
  }

  getLast5ConnectedUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/last/five`);
  }
}
