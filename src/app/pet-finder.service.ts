import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { HttpClientTestingModule } from '@angular/common/http/testing'
@Injectable({
  providedIn: 'root'
})
export class PetFinderService {

  public token: any;
  constructor(private http: HttpClient) { }


  GetToken(){
    return this.http.post(
      "https://api.petfinder.com/v2/oauth2/token/",
      environment.petFinderCeds
    )
  }

  SetToken(token: any){
    this.token = token
  }
  /// Returns a singular dog with the given apiKey given from the petfinder api
  GetDog(id: any,) {
    return this.http.get(
      `https://api.petfinder.com/v2/animals/${id}`,
      {
        headers:{
          Authorization: `Bearer ${this.token.access_token}`
        }
      }
    )
  }
  /// Returns the full list of dogs from the petfinder api
  GetDogs(){
    // console.log("trying to get token")
    return this.http.get(
      `https://api.petfinder.com/v2/animals?type=dog&page=1`,
      {
        headers:{
          Authorization: `Bearer ${this.token.access_token}`
        }
      }
    )
  }
  GetDogsFiltered(request: string){
    // this returns an observable that will give you an object as a result
    // subscribe to the obserable and then create a function for it to handle the below
    // the first value of the object is animal
    // inside animal is an array [<dog>] of dogs
    // each dog is an object that has property id: dogs.animal.foreach(dog => dog.id = varibale)
    return this.http.get(
      request,
      {
        headers:{
          Authorization: `Bearer ${this.token.access_token}`
        }
      }
    )
  }

  getLocation(id: number){
    return this.http.get(
      `https://api.petfinder.com/v2/organizations/${id}`,
      {
        headers:{
          Authorization: `Bearer ${this.token.access_token}`
        }
      }
    )
  }

  getTest(){
    return this.http.get(
      `https://api.petfinder.com/v2/organizations/CA912`,
      {
        headers:{
          Authorization: `Bearer ${this.token.access_token}`
        }
      }
    )
  }
}
