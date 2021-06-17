import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthProvider} from 'ngx-auth-firebaseui';
import { DNHService } from '../dnh.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  providers: any = AuthProvider;
  constructor(
    private router: Router,
    private dnh: DNHService
  ) {}

  printUser(event: any) {

    this.dnh.userSignIn(event.uid)
    this.router.navigate(['']);
  }

  ngOnInit(): void {

  }

}
