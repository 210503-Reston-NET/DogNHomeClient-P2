import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
import { Forum } from './models/Forum';
import { Post } from './models/Post';
import {doglist} from '../app/survey/DogList';
import { listeddog } from './survey/ListedDog';
@Injectable({
  providedIn: 'root'
})
export class DNHService {
  baseURLDL: string = "https://dognhome.azurewebsites.net/api/DogList/";
  baseURLLD: string = "https://dognhome.azurewebsites.net/api/ListedDog/";
  constructor(private http: HttpClient,) { }

  BaseURL: string = 'https://dognhome.azurewebsites.net/api/';
  url: string = '';

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
  AddListedDog(newListedDog: listeddog) : Promise<listeddog>
  {
    return this.http.post<listeddog>(this.baseURLLD, newListedDog).toPromise() 
  }
  GetAllDogList(): Promise<doglist> {
    return this.http.get<doglist>(this.baseURLLD).toPromise();
  }
  // this.http.get<[]>(
}
