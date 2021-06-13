import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup} from '@angular/forms';
import * as firebase from "firebase";
// import { first } from 'rxjs/operators';import { Component, OnInit, SimpleChange, SimpleChanges, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';


import { PetFinderService } from '../pet-finder.service'
import { DNHService } from '../dnh.service'
import { FirebaseApp } from '@angular/fire';
import { FirestoreSyncService } from 'ngx-auth-firebaseui';
import { AngularFireAuth } from '@angular/fire/auth';
// import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dogsArr: any;

  public gender: string = "";
  public age: string = "";
  public coat: string = "";

  location: any = {
    city: "",
    state: "",
    postalCode: ""
  }

  public color: string = "primary";

  value: number = 80;
  min: number = 30;
  max: number = 130;

  public distance: number = 100;
  public minDis: number = 5;
  public maxDis: number = 500;

  disLabel(val: number){
    return val
  }

  public children = false;
  public cats = false;
  public dogs = false;
  public houseTrained = false;
  

  constructor(private petFinder: PetFinderService, 
    private dnhService: DNHService,
    private af: AngularFireAuth
    ) { 
       
    }

    findSizeVal(){
      if(this.value > 110){
        return "xlarge"
      }else if(this.value > 85){
        return "large"
      }else if(this.value > 65){
        return "medium"
      }else{
        return "small"
      }
    }

    filterDogs(){
      console.log("filtering")
      let request = "https://api.petfinder.com/v2/animals?type=dog&size=" + this.findSizeVal() +
      "&good_with_children" + this.children +
      "&good_with_cats" + this.cats +
      "&good_with_dogs" + this.dogs +
      "&house_trained" + this.houseTrained;
      if(this.gender){
        request += "&gender=" + this.gender
      }
      if(this.age){
        request += "&age=" + this.age
      }
      if(this.coat){
        request += "&coat=" + this.coat
      }
      if(this.location.postalCode.length === 5){
        request += "&location=" + this.location.postalCode
        + "&distance=" + this.distance
      }else if(this.location.city && this.location.state){
        request += "&location=" + this.location.city.trim().toLowerCase() + "," + this.location.state.trim().toLowerCase()
        + "&distance=" + this.distance
      }
    
      console.log(request)
      this.petFinder.GetDogsFiltered(request).subscribe(dogs => {
        console.log(dogs)
        this.dogsArr = dogs
        console.log(this.dogsArr)
      
      })
  
    }

  getToken(){ 
    this.petFinder.GetToken().subscribe(token => {
      this.petFinder.SetToken(token)
      console.log("token set")
      this.getDogs()
      // this.getTest()
    })
  }

  getDogs(){
    // this.printUser2()
    this.petFinder.GetDogs().subscribe(dogs => {
      console.log(dogs)
      this.dogsArr = dogs;
    });
  }

  // getDogAPI(){
  //   this.dnhService.getDogAPI(1).subscribe(data => console.log(data))
  // }

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
    this.af.authState.subscribe(auth => {
      console.log(auth)
    })
    console.log(this.af.currentUser)
    // console.log( "Is the user here", firebase.default.auth().currentUser);

  }

}
