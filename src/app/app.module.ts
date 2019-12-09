import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeeComponent } from './see/see.component';
import { ConnectionComponent } from './connection/connection.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TripService} from './service/trip.service';
import {UserService} from './service/user.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'trips/:id', component: SeeComponent},
  { path: 'login', component: ConnectionComponent},
  { path: 'users/:id', component: ProfileComponent},
  { path: 'subscribe', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeeComponent,
    ProfileComponent,
    ConnectionComponent,
    RegisterComponent
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
