import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetFinderService } from '../pet-finder.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  dog: any;
  loc: any;
  dogPhotos: any;
  constructor(
    private route: ActivatedRoute,
    private petFinder: PetFinderService,
    private location: Location
    ) { }

    getToken(){

      if(this.petFinder.token){
        this.getDetails()
      }else if(!this.petFinder.token){
        this.petFinder.GetToken().subscribe(token => {
          this.petFinder.SetToken(token)
          this.getDetails()
        })
      }
    }

  goBack(){
    console.log("going back")
    this.location.back()
  }

  getDetails(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.petFinder.GetDog(id).subscribe(dog => {
      this.dog = dog
      this.dogPhotos = this.dog.animal.photos
      console.log(this.dogPhotos)
      this.getLocation(this.dog.animal.organization_id)
    })
  }

  getLocation(id: number){
    this.petFinder.getLocation(id).subscribe(loc => {
      console.log(loc)
      this.loc = loc
    })
  }

  directions(){
    this.loc.organization.address
  }
  ngOnInit(): void {
    this.getToken()
  }

}
