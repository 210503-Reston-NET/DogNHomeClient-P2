import { Component, OnInit } from '@angular/core';
import { DNHService } from '../dnh.service'
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, NgModel} from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { PetFinderService } from '../pet-finder.service'
import {doglist} from 'src/app/survey/DogList'
import {listeddog} from 'src/app/survey/ListedDog'
import { DogDetailsComponent } from '../dog-details/dog-details.component';



@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
 
  dogtolist: listeddog ={
    id: 0,
    dogid: 0,
  }
  
  
  surveyList: doglist = {
    id: 0,
    title: 'Surveyed List',
    created: new Date(10/11/15),
    username:'Cesar_19',
  }
  



  public dogs: any;
  size!: string;
  sizes: string [] = ['small', 'medium', 'large', 'xlarge']; 

  children!: string;
  childrens: string [] = ['true', 'false']; 

  spray_neutered!: string;
  spray_neutereds: string [] = ['true', 'false']; 
  
  mixed!: string;
  mixes: string [] = ['true', 'false']; 

  gender!: string;
  genders: string [] = ['male', 'female']; 

  house_trained!: string;
  house_traineds: string[] = ['true', 'false']; 

  age!: string;
  ages: string [] = ['young', 'old'];  
  
  

  constructor(private petFinder: PetFinderService, private dnhService: DNHService, private router: Router) {

 
  
 
}
  
  onSubmit(): void {
    
    this.GoToHome();
    
  }
  GoToHome()
  {
    
   // this.ngOnInit();
    this.AddTheSurveyList();
    
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
      this.Adding(this.dogs);
    });
  }

  getDogAPI(){
    this.dnhService.getDogAPI(1).subscribe(data => console.log(data))
  }


  ngOnInit(): void {
    this.getToken()
    // this.getDogs()
    this.getDogAPI()

  }

  Adding(dogs: any)
  {
    this.AddSurveyList(this.dogs,this.size, this.children, this.spray_neutered, this.mixed, this.house_trained, this.age, this.gender)
  }
  
  AddSurveyList(dogs: any,size: string, children: string, spray_neutered: string, mixed: string, house_trained: string, age: string, gender: string): void{

    if(dogs.age == age && dogs.gender == gender && dogs.breeds.mixed == mixed && dogs.enviroment.children == children && dogs.attributes.spray_neutered == spray_neutered && dogs.attributes.house_trained == house_trained)
    {
      this.AddToSurveyList(dogs)
    }

  }
  AddToSurveyList(dogs: any):void {
    this.dogtolist.dogid == dogs.id;
    
  }
  AddTheSurveyList():void
  {
    alert(`Ssurvey1 has been added`);
    this.dnhService.AddDogList(this.surveyList).then(
      result => {
        this.dogtolist.id = this.surveyList.id
        this.dnhService.AddListedDog(this.dogtolist)
        console.log(result);
        this.router.navigate(["List/:id"]);
        
      }
    ).catch(err => console.log(err));
    
  }
}


