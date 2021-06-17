import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {doglist} from 'src/app/dog-list/DogList'
import { PetFinderService } from '../pet-finder.service'
import { DNHService } from '../dnh.service'
import {SurveyComponent} from 'src/app/survey/survey.component'
import { ActivatedRoute } from '@angular/router';
import { listeddog } from '../models/ListedDog';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  dogtolist: listeddog ={
    dogs: '', 
    id: 0,
  }
  public dogs: any;

  public dogIdArr:any = []
  public doggos:any = []

  public dogAPI: number = 0

  constructor(private petFinder: PetFinderService, 
    private dnhService: DNHService, private route: ActivatedRoute //private survey: SurveyComponent
  )
  {}
    
  getDogsById(doggos1:any) {
    console.log("MY TESTING LIST INSIDE DOGGOS1", doggos1)
    doggos1.forEach((ints:any) => {
      this.petFinder.GetDog(ints).subscribe(data =>{ console.log(data)
        this.dogIdArr = data;
    });
      
    });
   // console.log("MY TESTING LIST", this.dogIdArr)
  }

  getToken(){
    this.petFinder.GetToken().subscribe(token => {
      this.petFinder.SetToken(token)
      console.log("token set")
      //this.getDogs()
    })
  }

  getDogs(){
    this.petFinder.GetDogs().subscribe(dogs => {
      console.log(dogs)
      this.dogs = dogs;
    });
  }

  getDogAPI(){
    console.log("MY DOGGOS LOG", this.doggos)
      this.doggos.array.forEach((int:any) => {
        this.dnhService.getDogAPI(int).subscribe(data =>{ console.log(data)
          this.dogIdArr = data 
      });
    }
    )
    
  }


  ngOnInit(): void {
    
    //this.getToken()
    // this.getDogs()
    this.getToken()
    console.log("I GET TO THIS POINT")
    this.route.queryParams.subscribe(
      params => {
        console.log("IT GOT PASSED BY SURVEY", params.listID)
        this.getTheSurveyDogs(parseInt(params.listID)-1)    
        
      }
        )
        console.log("MY TESTING LIST", this.dogIdArr)
        
        
        
      }
    
  getTheSurveyDogs(id:number):void
  {
    this.dnhService.GetListedDogByID(id).then(result => {
      console.log("This is the ID I inserted", id)
      console.log("MY RESULTS", result)
      //this.dogIdArr.push(result.map(({dogs}) => dogs)).toString()
      //console.log("DOGSARRRS",this.dogIdArr)
      result.forEach(results => { 
        console.log("MY INDIVIDUAL RESULTS:", results)
        this.dogAPI = parseInt(results)
        this.doggos.push(this.dogAPI)

        //MOCK TESTING MY CODE
        //this.dogAPI = parseInt('51990812')
        console.log ("Testing this out", this.dogAPI)
        //this.doggos.push(this.dogAPI)


        //console.log("SENT IN ID1:", results.dogs)
        //this.dogtolist = results
        
        //console.log("DOGTOLIST", this.dogtolist)
        //console.log(this.dogtolist.dogs)
        
       // console.log("SENT IN ID0:", results.id)
        //this.dogtolist.dogs = results.dogs
        //console.log("DOGTOLIST?",this.dogtolist)
        
        //console.log("SENT IN ID", parseInt(results.dogs))
        //console.log("API ID", this.dogAPI)
        
      })
      console.log("MY DOGGOS LOG1", this.doggos)
      this.getDogsById(this.doggos)  
        
   
      
      });
    }
    
    
    
    /*
    this.doggos.array.forEach((dogss:any)=> {
      console.log(dogss)
      this.dogIdArr.push(dogss)
    });
    console.log(this.dogIdArr)
    this.dogIdArr.array.forEach((dogsss:any)=> {

        this.petFinder.GetDog(dogsss).subscribe((dogssss:any)=>
          {console.log(dogssss)
          this.dogIdArr= dogssss});
    });*/
  }



