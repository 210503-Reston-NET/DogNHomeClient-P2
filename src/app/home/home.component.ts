import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup} from '@angular/forms';
import * as firebase from "firebase";
// import { first } from 'rxjs/operators';

import { PetFinderService } from '../pet-finder.service'
import { DNHService } from '../dnh.service'
// import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dogs: any;
  

  constructor(private petFinder: PetFinderService, 
    private dnhService: DNHService,
    ) { 
       
    }

  getToken(){
    this.petFinder.GetToken().subscribe(token => {
      this.petFinder.SetToken(token)
      console.log("token set")
      this.getDogs()
      this.getTest()
    })
  }

  getDogs(){
    this.petFinder.GetDogs().subscribe(dogs => {
      console.log(dogs)
      this.dogs = dogs;
    });
  }

  getDogAPI(){
    this.dnhService.getDogAPI(1).subscribe(data => console.log(data))
  }

  getTest(){
    console.log("starting test")
    this.petFinder.getTest().subscribe(
      data => console.log("this is the test", data)
      )
  }

  ngOnInit(): void {
    this.getToken()
    // this.getDogs()
    // this.getDogAPI()
    // this.getTest()
    this.printUser2()
  }

  printUser2(){

    console.log( "Is the user here", firebase.default.auth().currentUser);

  }

}
