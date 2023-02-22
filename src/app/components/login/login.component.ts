import { Component } from '@angular/core';
import {HeroService} from "../../hero.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hidden: boolean = true
  data: undefined
  array = []
  array2 = [
    {a:1, b:2},
    {a:1, b:2},
    {a:1, b:2},
    {a:1, b:2},
    {a:1, b:2},
    {a:1, b:2},
    {a:1, b:2},
  ]
  list: number[] = [1, 2, 3, 4, 5];
  constructor(private services: HeroService) {
    this.services.getHeroData().subscribe(data => {
      console.log(data);
      // @ts-ignore
      this.data = data['data']
      console.log(this.data);
    })
  }
  value="";
  clearValue() {
    this.value="";
    this.array = []
    console.log(this.list);
  }
  name: string | undefined
  age: number | undefined

  receiveData(data: {name: string, age: number}) {
    this.name = data.name;
    this.age = data.age
  }

   getData() {
    return this.services.getHeroData().subscribe(data => {
      console.log(data);
      // @ts-ignore
      this.data = data['data']
      console.log(this.data);
    })
     // @ts-ignore
     // console.log(this.data)
     // @ts-ignore
     // this.array.push(this.data)
     // console.log(this.array)
   }
   fontSize = 17

  changeFontSize(size: any) {
    // console.log(size);
    this.fontSize = size
   }
    data_delete: undefined
   deleteUser(id: number) {
    return this.services.deleteUser(id).subscribe(res => {
      // @ts-ignore
      this.data_delete = res['id']
      // @ts-ignore
      for (let item of this.data) {
        if (item.id == this.data_delete) {
          // @ts-ignore
          this.data.splice(item)
        }
      }
      console.log(this.data_delete)
    })
   }

  showHiddenText() {
    this.hidden = !this.hidden
  }
}

export class Data {
  a: any
  b: any
  c: any
  d: any
  e: any
}
