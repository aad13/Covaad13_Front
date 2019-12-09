import { Component, OnInit } from '@angular/core';
import {Trip} from '../model/Trip';
import {Observable, of} from 'rxjs';
import {User} from '../model/User';
import {ActivatedRoute, Router} from '@angular/router';
import {TripService} from '../service/trip.service';

@Component({
  selector: 'app-see',
  templateUrl: './see.component.html',
  styleUrls: ['./see.component.css']
})
export class SeeComponent implements OnInit {

  id: number;
  trip: Trip;
  passengers: Observable<User[]>;
  constructor(private tripService: TripService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.trip = new Trip();
    this.id = this.route.snapshot.params.id;
    this.tripService.getTrip(this.id).subscribe(
      data => { this.trip = data; },
      error => { console.log(error); });
  }
  book(id: number) {}

}
