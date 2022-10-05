import {Component, OnInit} from '@angular/core';
import {UserDetails} from '../../model/userDetails';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userID: string;
  password: string;
  userDetails: UserDetails = new UserDetails();
  msgs = [];


  constructor(private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  authenticateUser(): void {
    this.userDetails.userId = this.userID;
    this.userDetails.password = this.password;
    //
    this.userDetails.printDetails();

    if (this.userID === 'login' && this.password === 'login') {
      this.msgs.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
      this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
      this.router.navigateByUrl('home');
    } else {
      this.messageService.add({severity: 'error',  summary: 'Login error: ', detail: ' user id and password does not match'});
      // this.messageService.add({severity: 'error', summary: 'Login error: ', detail: ' user id password does not match'});

    }
  }

  clear(userID: string, password: string): void {
    this.userID = '';
    this.password = '';
    this.userDetails = new UserDetails();
  }
}
