import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TripService} from '../service/trip.service';
import {Trip} from '../model/Trip';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trips: Observable<Trip[]>;
  constructor(private tripService: TripService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.trips = this.tripService.getUnfinishedTrips();
  }

  getTrip(id: number) {
    this.tripService.getTrip(id).subscribe(
        data => { console.log(data); },
        error => { console.log(error); });
  }

}
