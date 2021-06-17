import { Component, OnInit } from '@angular/core';

import { PetFinderService } from '../pet-finder.service'
import { DNHService } from '../dnh.service'
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dogsArr: any;
  public filterName: any;
  public dogHolder: any;
  public userHolder: any;
  public alertsArrHolder: string[] = [];

  public gender: string = "";
  public age: string = "";
  public coat: string = "";

  location: any = {
    city: "",
    state: "",
    postalCode: ""
  }

  public color: string = "primary";

  value: number = 80;
  min: number = 30;
  max: number = 130;

  public distance: number = 100;
  public minDis: number = 5;
  public maxDis: number = 500;

  disLabel(val: number){
    return val
  }

  public children = false;
  public cats = false;
  public dogs = false;
  public houseTrained = false;
  

  constructor(
    private petFinder: PetFinderService, 
    private dnhService: DNHService,
    private auth: AuthService
    ) { }

    findSizeVal(){
      if(this.value > 110){
        return "xlarge"
      }else if(this.value > 85){
        return "large"
      }else if(this.value > 65){
        return "medium"
      }else{
        return "small"
      }
    }

    saveAlert(){
      let urlRequest = this.filterStringBuilder()
      
      urlRequest += "&limit=1"
      this.petFinder.GetDogsFiltered(urlRequest).subscribe(dog => {
        console.log(dog)
        this.dogHolder = dog

        let mostRecentDog = this.dogHolder.animals[0].id


        this.auth.getUser().subscribe(token => {
          let userId = token?.uid

          this.dnhService.setAlert({
            AlertID: 0,
            UserID: userId,
            AlertType: this.filterName,
            AlertValue: urlRequest,
            DogID: mostRecentDog
          }).subscribe(result => {
            this.filterName = ""
          })

        })
      })
    }

    getUserIdForAlertCheck(){
      this.auth.getUser().subscribe(user =>{
        this.userHolder = user?.uid
        this.checkAlerts(this.userHolder)
      })
    }

    checkAlerts(userId: any){

      this.dnhService.getAlerts(userId).subscribe((res: any) => {

        res.forEach((x: any) => {
          this.checkForNewDog(x.dogID, x.alertValue, x.alertType)
        })
        
      })
    }

    checkForNewDog(dogID: string, url: string, alertName: string){
      this.petFinder.GetDogsFiltered(url).subscribe((res: any )=> {
 
        if(res.animals[0].id.toString() === dogID){
          return
        }else if(res.animals[0].id.toString() !== dogID){
          alert("A new dog matching criteria in '"+alertName+"' has been updated, go to your alerts to see the new dogs!")
        }
      })
    }

    filterStringBuilder(){
      let request = "https://api.petfinder.com/v2/animals?type=dog&size=" + this.findSizeVal() +
      "&good_with_children" + this.children +
      "&good_with_cats=" + this.cats +
      "&good_with_dogs=" + this.dogs +
      "&house_trained=" + this.houseTrained;
      if(this.gender){
        request += "&gender=" + this.gender
      }
      if(this.age){
        request += "&age=" + this.age
      }
      if(this.coat){
        request += "&coat=" + this.coat
      }
      if(this.location.postalCode.length === 5){
        request += "&location=" + this.location.postalCode
        + "&distance=" + this.distance
      }else if(this.location.city && this.location.state){
        request += "&location=" + this.location.city.trim().toLowerCase() + "," + this.location.state.trim().toLowerCase()
        + "&distance=" + this.distance
      }

      return request
    }

    filterDogs(){

      const request = this.filterStringBuilder()

      this.petFinder.GetDogsFiltered(request).subscribe(dogs => {
        this.dogsArr = dogs
      })
    }

  getToken(){ 

    if(this.petFinder.token){
      this.getDogs()
      this.getUserIdForAlertCheck()
    }else if(!this.petFinder.token){
      this.petFinder.GetToken().subscribe(token => {
        this.petFinder.SetToken(token)
        this.getDogs()
        this.getUserIdForAlertCheck()
      })
    }
  }

  getDogs(){
    this.petFinder.GetDogs().subscribe(dogs => {
      this.dogsArr = dogs;
    });
  }

  ngOnInit(): void {
    this.getToken()
    
  }
}
