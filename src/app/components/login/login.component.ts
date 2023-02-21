import { Component } from '@angular/core';
import {HeroService} from "../../hero.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data = new Data()
  array = []
  array2 = [1,2,3,55,6]
  constructor(private services: HeroService) {
    this.services.getHeroData().subscribe(data => {
      // @ts-ignore
      this.data = data
    })
  }
  value="";
  clearValue() {
    this.value="";
  }
  name: string | undefined
  age: number | undefined

  receiveData(data: {name: string, age: number}) {
    this.name = data.name;
    this.age = data.age
  }

   getData() {
     // @ts-ignore
     // console.log(this.data)
     // @ts-ignore
     // console.log(typeof this.data.a)
     this.array.push(this.data)
     // for (let item of this.array) {
     //
     //   console.log(item['a'])
     // }
   }
}

export class Data {
  a: any
  b: any
  c: any
}
