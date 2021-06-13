import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetFinderService {

  private token: any;
  constructor(private http: HttpClient) { }


  GetToken(){
    console.log("getting token")
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
