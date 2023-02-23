import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  setHeader() {
    let token = JSON.parse(<string>localStorage.getItem('token'))
    return new HttpHeaders().set('Authorization', 'Bearer' + token)
  }

  login(data: any) :Observable<any> {
    return this.http.post(environment.apiUrl + '/login', data, {headers: this.setHeader()})
  }

  logout() :Observable<any> {
    return this.http.post(environment.apiUrl + '/logout', null, {headers: this.setHeader()})
  }
}
