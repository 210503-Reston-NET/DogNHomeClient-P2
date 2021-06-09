import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { PetFinderService } from '../pet-finder.service'

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  dog: any;
  constructor(
    private route: ActivatedRoute,
    private petFinder: PetFinderService) { }

    getToken(){
      this.petFinder.GetToken().subscribe(token => {
        this.petFinder.SetToken(token)
        console.log("token set")
        this.getDetails()
      })
    }

  getDetails(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.petFinder.GetDog(id).subscribe(dog => {
      console.log(dog)
      this.dog = dog})
  }
  ngOnInit(): void {
    this.getToken()
  }

}
