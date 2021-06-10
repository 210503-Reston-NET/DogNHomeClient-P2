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

  GetDog(id: any,){
    return this.http.get(
      `https://api.petfinder.com/v2/animals/${id}`,
      {
        headers:{
          Authorization: `Bearer ${this.token.access_token}`
        }
      }
    )
  }
  GetDogs(){
    console.log("getting dogs", this.token)

    return this.http.get(
      `https://api.petfinder.com/v2/animals?type=dog&page=1`,
      {
        headers:{
          Authorization: `Bearer ${this.token.access_token}`
        }

      }
    )
  }
}
