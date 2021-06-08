import { Component, OnInit } from '@angular/core';

import { PetFinderService } from '../pet-finder.service'
// import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dogs: any;
  constructor(private petFinder: PetFinderService) { }

  getToken(){
    this.petFinder.GetToken().subscribe(token => {
      this.petFinder.SetToken(token)
      console.log("token set")
      this.getDogs()
    })
  }

  getDogs(){
    this.petFinder.GetDogs().subscribe(dogs => {
      console.log(dogs)
      this.dogs = dogs;
    });
  }

  ngOnInit(): void {
    this.getToken()
    // this.getDogs()
  }

}
