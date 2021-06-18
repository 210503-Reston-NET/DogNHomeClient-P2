import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forum } from './models/Forum';
import { Post } from './models/Post';
import {doglist} from '../app/survey/DogList';
import { listeddog } from './survey/ListedDog';
import { Comments } from './models/Comments';
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

  GetForums(): Promise<Forum[]> {
    this.url = this.BaseURL + 'Forum';
    return this.http.get<Forum[]>(this.url).toPromise();
  }
  AddForum(newForum: Forum): Promise<Forum>{
    this.url = this.BaseURL + 'Forum';
    return this.http.post<Forum>(this.url, newForum).toPromise();
  }
  //Posts
  GetPosts(forumID: number): Promise<Post[]> {
    this.url = this.BaseURL + 'Post/' + forumID;
    return this.http.get<Post[]>(this.url).toPromise();
  }
  AddPost(postToAdd: Post): Promise<Post> {
    this.url = this.BaseURL + 'Post/';
    return this.http.post<Post>(this.url, postToAdd).toPromise();
  }
  GetPost(postID: number): Promise<Post> {
    this.url = this.BaseURL + "Comment/" + postID;
    return this.http.get<Post>(this.url).toPromise();
  }
  //DogList
  AddDogList(newDogList: doglist) : Promise<doglist>
  {
    return this.http.post<doglist>(this.baseURLDL, newDogList).toPromise() 
  }
  AddListedDog(newListedDog: listeddog) : Promise<string>
  {
    console.log("ENTER")              //'https://dognhome.azurewebsites.net/api/DogList/50'
    return this.http.post<string>(this.BaseURL + "DogList/" + newListedDog.id, newListedDog).toPromise() 
  }
  GetListedDogByID(id:any): Promise<[]> {
    return this.http.get<[]>(this.BaseURL + "ListedDog/" + id).toPromise();
  }
  AddLikes(newLikes: likes ) : Promise<any>
  {
    return this.http.post<likes>(this.baseURLL, newLikes).toPromise(); 
  }
  GetAllListedDogs(): Promise<listeddog>
  {
    return this.http.get<listeddog>(this.baseURLLD).toPromise();
  }
  GetAllLisedDogsByUsername(username:string): void//Promise<listeddog[]>
  {
    //return this.http.get<listeddog[]>(this.BaseURL+ "ListedDog/", username).toPromise();
  }
  GetAllDogList(): Promise<doglist> {
    return this.http.get<doglist>(this.baseURLLD).toPromise();
  }
  setAlert(mcguffin: any){
    return this.http.post(
      this.BaseURL + "Alert",
      mcguffin
    )
  }
  // user id
  getAlerts(id: any){
    return this.http.get(
      this.BaseURL+"Alert/"+(id.toString())
    )
  }

  removeAlert(xalert: any){
    
    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: xalert
    };

    return this.http.delete(
      this.BaseURL+"Alert/"+(xalert.alertID.toString()),
      httpOptions
    )
  }

  seenAlertedDogs(xalert: any){

    return this.http.put(
      this.BaseURL+"Alert/",
      xalert
    )
  }
  //Comments
  GetAllComments(postID: number): Promise<Comments[]>
  {
    this.url = this.BaseURL + "Comment/" + postID;
    return this.http.get<Comments[]>(this.url).toPromise();
  }
  AddComments(newComment: Comments): Promise<Comments>
  {
    this.url = this.BaseURL + "Comment"
    return this.http.post<Comments>(this.url, newComment).toPromise();
  }
}
