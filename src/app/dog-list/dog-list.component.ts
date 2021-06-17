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
      this.petFinder.GetDog(ints).subscribe(data =>{ //console.log(data)
        this.dogIdArr.push(data);
    });
      
    });
    console.log("MY TESTING LIST BEFORE LEAVING GET DOGSBYID", this.dogIdArr)
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

  ngOnInit(): void {

    this.getToken()
    this.route.queryParams.subscribe(
      params => {
        console.log("IT GOT PASSED BY SURVEY", params.listID)
        this.getTheSurveyDogs(parseInt(params.listID)-1)

      }
        )
        console.log("MY TESTING LIST AFTER LEAVING GET DOGSBYID", this.dogIdArr)



      }

  getTheSurveyDogs(id:number):void
  {
    this.dnhService.GetListedDogByID(id).then(result => {
      console.log("This is the ID I inserted", id)
      console.log("MY RESULTS", result)
      result.forEach(results => { 
        console.log("MY INDIVIDUAL RESULTS:", results)
        this.dogAPI = parseInt(results)
        this.doggos.push(this.dogAPI)
        console.log ("Testing this out", this.dogAPI)
      })
      console.log("MY DOGGOS LOG1", this.doggos)
      this.getDogsById(this.doggos)



    });
  }
}
