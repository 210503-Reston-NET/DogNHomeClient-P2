import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
import { Forum } from './models/Forum';
import { Post } from './models/Post';
import {doglist} from '../app/models/DogList';
import { listeddog } from './models/ListedDog';
import { likes } from './models/Likes';
@Injectable({
  providedIn: 'root'
})
export class DNHService {
  baseURLDL: string = "https://dognhome.azurewebsites.net/api/DogList/";
  baseURLLD: string = "https://dognhome.azurewebsites.net/api/ListedDog/";
  baseURLL: string = "https://dognhome.azurewebsites.net/api/Likes/";
  constructor(private http: HttpClient,) { }

  BaseURL: string = 'https://dognhome.azurewebsites.net/api/';
  url: string = '';

   // the backend takes in a string for the user id
  // the backend checks if the user already exists
  // If the user exists return ok()
  // else create new user with id
  // create faviorte list for new user

  userSignIn(id: any){
    this.http.post(
      this.BaseURL+"User/",
      id
    )
  }

  getDogAPI(id: any){
  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

    return this.http.get(
      "https://dognhome.azurewebsites.net/api/Dog/",
      {
        headers:
          headers
      }
    )
  }

  GetForums(): Promise<Forum[]> {
    this.url = this.BaseURL + 'Forum/';
    return this.http.get<Forum[]>(this.url).toPromise();
  }
  AddForum(newForum: Forum): Promise<Forum>{
    this.url = this.BaseURL + 'Forum/';
    return this.http.post<Forum>(this.url, newForum).toPromise();
  }
  //Posts
  GetPosts(forumID: number): Promise<Post[]> {
    this.url = this.BaseURL + 'Post/' + forumID;
    alert(this.url);
    return this.http.get<Post[]>(this.url).toPromise();
  }
  AddDogList(newDogList: doglist) : Promise<doglist>
  {
    return this.http.post<doglist>(this.baseURLDL, newDogList).toPromise() 
  }
  AddListedDog(newListedDog: listeddog) : Promise<doglist>
  {
    console.log("ENTER")              //'https://dognhome.azurewebsites.net/api/DogList/50'
    return this.http.post<doglist>(this.BaseURL + "DogList/" + newListedDog.id, newListedDog).toPromise() 
  }
  GetAllDogList(): Promise<doglist> {
    return this.http.get<doglist>(this.baseURLLD).toPromise();
  }
  AddLikes(newLikes: likes ) : Promise<likes>
  {
    return this.http.post<likes>(this.baseURLL, newLikes).toPromise() 
  }
  GetAllListedDogs(): Promise<listeddog>
  {
    return this.http.get<listeddog>(this.baseURLLD).toPromise();
  }
 
  // this.http.get<[]>(
}
