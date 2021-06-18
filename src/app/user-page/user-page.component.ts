import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DNHService } from '../dnh.service';
import { PetFinderService } from '../pet-finder.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService,
    private dnhService: DNHService,
    private petFinder: PetFinderService,
    private location: Location
  ) { }

  public newAlertsArr: any = [];
  public noNewAlertsArr: any = [];
  public totalAlerts: any = 0;
  public selectedAlert: any
  public dogsArr: any;

  showAlertDogs(xalert: any){
    this.petFinder.GetDogsFiltered(
      (xalert.alertValue.substring(0, xalert.alertValue.length -1))
      +"20"
      ).subscribe(dogs => {
      this.dogsArr = dogs
    })
  }

  deleteAlert(xalert: any){

    this.dnhService.removeAlert(xalert).subscribe(res => {

      this.newAlertsArr.filter((x: any) => {
        return x.alertID !== xalert.alertID
      })  
      this.noNewAlertsArr.filter((x: any) => {
        return x.alertID !== xalert.alertID
      })  
    })
  }

  seenNewDogs(xalert: any){
    this.petFinder.GetDogsFiltered(xalert.alertValue).subscribe((res: any) => {

      xalert.dogID = res.animals[0].id

      this.dnhService.seenAlertedDogs(xalert)
    })

  }

  getUserIdForAlertCheck(){
    this.auth.getUser().subscribe((user: any) =>{
      this.checkAlerts(user.uid)
      this.dnhService.GetAllLisedDogsByUsername(user.uid)
    })
  }

  checkAlerts(userId: any){

    this.dnhService.getAlerts(userId).subscribe((res: any) => {

      this.totalAlerts = res.length

      res.forEach((x: any) => {

        this.checkForNewDog(x)
      })
      
    })
  }

  checkForNewDog(xalert: any){
    this.petFinder.GetDogsFiltered(xalert.alertValue).subscribe((res: any )=> {

      if(res.animals[0].id.toString() === xalert.dogID){
        this.noNewAlertsArr.push(xalert)
      }else if(res.animals[0].id !== xalert.dogID){
        this.newAlertsArr.push(xalert)
      }
    })
  }

  getToken(){ 
    if(this.petFinder.token){

      this.getUserIdForAlertCheck()
    }else if(!this.petFinder.token){
      this.petFinder.GetToken().subscribe(token => {
        this.petFinder.SetToken(token)
        this.getUserIdForAlertCheck()
      })
    }
    
  }

  signOut(){
    this.router.navigate(['Login'])
  }
  goBack(){
    this.location.back()
  }
  ngOnInit(): void {
    this.getToken()
  }

}
