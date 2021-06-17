import { Component, OnInit } from '@angular/core';
import { DNHService } from '../dnh.service'
import { Router } from '@angular/router';
import { PetFinderService } from '../pet-finder.service'
import {doglist} from 'src/app/survey/DogList'
import {listeddog} from 'src/app/survey/ListedDog'
import { ActivatedRoute } from '@angular/router';
import { loadTranslations } from '@angular/localize';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
 
  public dogsArr:any
  public dogIdArr:any = []
  public dogsss: string = ''
  public doggies: any = []
  dogtolist: listeddog ={
    dogs: '', 
    id: 0,
  }
  
  public color: string = "primary";

  surveyList: doglist = {
    listID: 0,
    title: 'Surveyed List',
    created: new Date(),
    username:'Cesar_19',
  }
  



  public myInt: number=0;
  size!: string;
  sizes: string [] = ['small', 'medium', 'large', 'xlarge']; 

  children!: string;
  childrens: string [] = ['true', 'false']; 

  spray_neutered!: string;
  spray_neutereds: string [] = ['true', 'false']; 
  
  mixed!: string;
  mixes: string [] = ['true', 'false']; 

  gender!: string;
  genders: string [] = ['Male', 'Female']; 

  house_trained!: string;
  house_traineds: string[] = ['true', 'false']; 

  age!: string;
  ages: string [] = ['baby','young', 'adult', 'senior'];  
  public cats = false;
 
  

  constructor(private petFinder: PetFinderService, private dnhService: DNHService, private router: Router, private route: ActivatedRoute  ) {

 
  
 
}


  
  onSubmit(): void {
    
    this.GoToHome();
    
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
    this.dogsArr = dogs;
  });
}

//getDogAPI(){
  //this.dnhService.getDogAPI(1).subscribe(data => console.log(data))
//}
ngOnInit(): void {
  //this.getToken()
   //this.getDogs()
   //this.getDogAPI()
}

  
  
  GoToHome():void
  {
    this.AddTheSurveyList(); 
    console.log("LEAVING SURVEY1:", this.myInt)
    this.DoglistPage();
    
    
  }
  DoglistPage(): void
  {

    console.log("LEAVING SURVEY2:", this.myInt)
    
  }

  
  

  filterDogs(ids: any){
    console.log("filteringToAddList")
    let request = "https://api.petfinder.com/v2/animals?type=dog&size=" + this.size+
    "&good_with_children=" + this.children +
    "&house_trained=" + this.house_trained +
    "&gender=" + this.gender +
    "&age=" + this.age +
    "&spray_neutered=" + this.spray_neutered + 
    "&mixed="+ this.mixed

    console.log(request)
      this.petFinder.GetDogsFiltered(request).subscribe(dogs => {
        //console.log(dogs)
        this.dogsArr = dogs
        //console.log(this.dogsArr)
        this.dogtolist.id = ids
        this.dogsArr.animals.forEach((dogss:any) => {
          //console.log(dogss.id)
          
          this.dogIdArr.push(dogss.id)
          this.dogsss = dogss.id.toString()
          this.doggies.push(this.dogsss)
          //this.dogtolist.id = ids
          //console.log(ids)
          //console.log(this.dogtolist.dogid)
           
        });

        this.dogtolist.dogs = this.doggies
          //console.log('GIVE ME DOG TO LIST', this.dogtolist)
          this.dnhService.AddListedDog(this.dogtolist).then(
            (result:any) => console.log("adding to the DB", result)        
          );

        console.log(this.dogtolist.dogs)
        //console.log(this.doggies)
        this.dogtolist.id = ids
        //this.dogtolist.dogs = this.doggies
        //console.log(this.dogtolist)
        //console.log(this.dogtolist.dogid)
        //this.dnhService.AddListedDog(this.dogtolist).then(
          //(result:any) => console.log("adding to the DB", result)        
       // ); 
        //this.dogIdArr = this.dogsArr.forEach((dogss:any) => this.dogIdArr.push(dogss.animals.id))
        console.log("ABOUT TO GET DOGSARR");
        //console.log(this.dogIdArr);
        console.log("JUST GOT DOGSARR");
        //console.log("Date = " + this.surveyList.created) 
        
        //this.dnhService.AddListedDog(this.dogtolist)
          
        });; //NEED TO CHANGE THIS
      
      
  }

  AddTheSurveyList(): void {
  
    this.dnhService.AddDogList(this.surveyList).then( result =>
        {
          console.log(result) 
          console.log(result.listID) 
          this.dogtolist.id = result.listID
          console.log("POST ASSIGNMENT:", this.dogtolist.id)
          this.filterDogs(result.listID)  
          this.myInt = this.dogtolist.id
          console.log("MY INT VALUE", this.myInt)
          this.router.navigate(["List"], { queryParams: { listID: this.myInt }})
        }
    ).catch(err => console.log(err));
    }
}


