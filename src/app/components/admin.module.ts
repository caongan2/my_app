import {RouterModule, Routes} from "@angular/router";
import {TestComponent} from "./test/test.component";
import * as path from "path";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    TestComponent,
    RegisterComponent,
    LoginComponent
  ],
  exports: [

  ],
  imports: [
    [RouterModule.forChild(routes)]
  ]
})
export class AdminModule {}
