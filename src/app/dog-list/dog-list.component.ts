import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {doglist} from 'src/app/dog-list/DogList'
import { PetFinderService } from '../pet-finder.service'
import { DNHService } from '../dnh.service'

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  doglists: doglist[] = [];
  public dogs: any;
  public searchParams: FormGroup;

  constructor(private petFinder: PetFinderService, 
    private dnhService: DNHService,
    fb: FormBuilder) { 
      this.searchParams = fb.group({
        
        small: false,
        medium: false,
        large: false,
        xlarge: false,

      })
    }

    

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

  getDogAPI(){
    this.dnhService.getDogAPI(1).subscribe(data => console.log(data))
  }


  ngOnInit(): void {
    
    this.getToken()
    // this.getDogs()
    this.getDogAPI()
    this.dnhService.GetAllDogList().then(result => this.dogs = result);

  }

}
