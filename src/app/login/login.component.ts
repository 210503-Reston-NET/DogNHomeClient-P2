import { Component, OnInit } from '@angular/core';
// import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import * as firebase from "firebase";
import { ActivatedRoute, Router } from '@angular/router';
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

  printUser2(){
    // console.log(firebase.auth().currentUser);

  }

  printUser(event: any) {
    console.log(event.uid);
    this.dnh.userSignIn(event.uid)
    this.router.navigate(['']);
  }

  // checkUser(){
  //   console.log("user")
  //   if(firebase.default.auth().currentUser){
  //   }
  // }
  ngOnInit(): void {
    // this.checkUser()
  }

}
