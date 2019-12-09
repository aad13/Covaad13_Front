import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Trip} from '../model/Trip';

@Injectable()
export class TripService {
  private baseUrl = 'http://localhost:8080/covaad13/webapi';

  constructor(private http: HttpClient) {
  }

  getUnfinishedTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.baseUrl}/trips`);
  }

  getTrip(id: number): Observable<Trip> {
    return this.http.get<Trip>(`${this.baseUrl}/users/${id}`);
  }
  getTripsForUser(id: number): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.baseUrl}/users/${id}/trips`);
  }
}
