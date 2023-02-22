import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) {

  }
   getHeroData() {
    return this.http.get('http://127.0.0.1:8000/api');
  }
   deleteUser(id: number) {
    return this.http.delete('http://127.0.0.1:8000/api/' +  id + '/user')
   }
}
