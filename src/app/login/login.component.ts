import { Component, OnInit } from '@angular/core';
// import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import * as firebase from "firebase";
import { ActivatedRoute, Router } from '@angular/router';
import {AuthProvider} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  providers: any = AuthProvider;
  constructor(
    private router: Router
  ) {}

  printUser2(){
    // console.log(firebase.auth().currentUser);

  }

  printUser(event: any) {
    console.log(event);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
