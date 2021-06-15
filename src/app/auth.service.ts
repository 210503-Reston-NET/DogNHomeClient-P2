import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth,
   public af: AngularFireAuth) { }


  //  this will return an observable
  // when called follow it with a subcribe method
  // the result variable passed to it will hole the user 
  // to get the id call result.uid
  // example
  // getUser().subscribe(result => function-that-needs-id(result.uid))
   getUser(){
    return this.af.authState
   }
}
