import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {doglist} from 'src/app/dog-list/DogList'
import { PetFinderService } from '../pet-finder.service'
import { DNHService } from '../dnh.service'
import {SurveyComponent} from 'src/app/survey/survey.component'

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  doglists: doglist[] = [];
  public dogs: any;

  public dogIdArr:any = []
  public doggos:any = []

  constructor(private petFinder: PetFinderService, 
    private dnhService: DNHService, //private survey: SurveyComponent
  )
  {}
    

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
    //this.getTheSurveyDogs(this.survey.dogIdArr)
   
  }
  getTheSurveyDogs(doggos: any):void
  {
    this.doggos.array.forEach((dogss:any)=> {
      console.log(dogss)
      this.dogIdArr.push(dogss)
    });
    console.log(this.dogIdArr)
    this.dogIdArr.array.forEach((dogsss:any)=> {

        this.petFinder.GetDog(dogsss).subscribe((dogssss:any)=>
          {console.log(dogssss)
          this.dogIdArr= dogssss});
    });
  }
}

