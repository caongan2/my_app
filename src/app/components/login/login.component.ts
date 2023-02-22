import { Component } from '@angular/core';
import {HeroService} from "../../hero.service";
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hidden: boolean = true
  data: undefined
  array = []
  formLogin ?: FormGroup
  constructor(
    private services: HeroService,
    private authServices: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.services.getHeroData().subscribe(data => {
      console.log(data);
      // @ts-ignore
      this.data = data['data']
    })
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    let data = this.formLogin?.value;
    this.authServices.login(data).subscribe(res => {
      localStorage.setItem('token', JSON.stringify(res.access_token));
      localStorage.setItem('userLogin', JSON.stringify(res.user));
      console.log(localStorage.getItem('userLogin'));
    });
  }

  value="";
  clearValue() {
    this.value="";
    this.array = []
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
    })
   }
   fontSize = 17

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
