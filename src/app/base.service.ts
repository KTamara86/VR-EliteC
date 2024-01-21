import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private url= 'http://localhost:4200'

  constructor(private http:HttpClient) { }

  getRegisztarcio() :Observable<any>{
    return this.http.get('http://localhost:4200/usersignup')
  }

  sikeresFoglalas(regisztracio: any): Observable<any> {
    return this.http.post(`${this.url}/usersignup`, regisztracio);
  }
}
