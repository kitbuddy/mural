import {Component, OnInit} from '@angular/core';
import {UserDetails} from '../../model/userDetails';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userID: string;
  password: string;
  userDetails: UserDetails = new UserDetails();

  constructor() {
  }

  ngOnInit(): void {
  }

  authenticateUser(userID: string, password: string): void {
    this.userDetails.userId = userID;
    this.userDetails.password = password;

    this.userDetails.printDetails();
  }

  clear(userID: string, password: string): void {
    this.userID = '';
    this.password = '';
    this.userDetails = new UserDetails();
  }
}
