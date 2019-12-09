import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  registered = false;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.registered = false;
    this.user = new User();
  }

  save() {
    this.userService.subscribe(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.goToLogin();
  }

  onSubmit() {
    this.registered = true;
    this.save();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
