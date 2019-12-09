import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TripService} from './service/trip.service';
import {UserService} from './service/user.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [
    TripService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
