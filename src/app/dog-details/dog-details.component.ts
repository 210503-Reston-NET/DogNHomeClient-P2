import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetFinderService } from '../pet-finder.service';
import { Location } from '@angular/common'
import { likes } from '../models/Likes';
import { AuthService } from '../auth.service';
import { DNHService } from '../dnh.service';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  


  likeList: likes = {
    userName:'Cesar_19',
    dogID: 0,
  }
  dog: any;
  loc: any;
  dogPhotos: any;
  constructor(
    private route: ActivatedRoute,
    private petFinder: PetFinderService,
    private location: Location,
    private auth: AuthService,
    private dnhservice: DNHService
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
    this.petFinder.GetDog(id).subscribe((dog: any) => {
      this.dog = dog
      this.dogPhotos = this.dog.animal.photos
      console.log(dog)
      this.getLocation(this.dog.animal.organization_id)
      this.likeList.dogID = id
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
    this.auth.getUser().subscribe((result:any) => {
      if (result)
        if (result.displayName) {
          this.likeList.userName = result.uid 
        }
        else if (result.email) {
          alert(result.email)
          this.likeList.userName = result.email
        }
        
  });
  }

  function() {
    const heart = document.getElementById('heart');
    heart?.addEventListener('click', function() {
      heart.classList.toggle('red');
      console.log("IT Changes to red")
      
    });
    this.dnhservice.AddLikes(this.likeList).then((result:any) =>
      {}
    );
    console.log("Pre adding list", this.likeList)
    
  };
}
