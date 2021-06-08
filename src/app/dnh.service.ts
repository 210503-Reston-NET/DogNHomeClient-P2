import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';

@Injectable({
  providedIn: 'root'
})
export class DNHService {

  constructor(private http: HttpClient,) { }

  // this.http.get<[]>(
}
