import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/User';
import {Trip} from '../model/Trip';

@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:8080/covaad13/webapi';
  constructor(private http: HttpClient) {
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  subscribe(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user);
  }

  proposeTrip(trip: Trip, id: number): Observable<Trip> {
    return this.http.post<Trip>(`${this.baseUrl}/users/${id}/propose`, trip);
  }

  bookForTrip(uId: number, tId: number, value: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/users/${uId}/book/${tId}`, value);
  }

  unbookForTrip(uId: number, tId: number, value: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/users/${uId}/unbook/${tId}`, value);
  }

  cancelTrip(uId: number, tId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${uId}/cancel/${tId}`, {responseType: 'text'});
  }
}
