import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';

@Injectable({
  providedIn: 'root'
})
export class DNHService {

  constructor(private http: HttpClient,) { }

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
  // this.http.get<[]>(
}
