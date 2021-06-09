import { Component, OnInit } from '@angular/core';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  printUser(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
