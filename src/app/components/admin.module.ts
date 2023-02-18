import {RouterModule, Routes} from "@angular/router";
import {TestComponent} from "./test/test.component";
import {RegisterComponent} from "./register/register.component";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import { ChildComponent } from './login/child/child.component';
import {LoginComponent} from "./login/login.component";

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
  ],
  exports: [

  ],
    imports: [
        [RouterModule.forChild(routes)],
        FormsModule
    ]
})
export class AdminModule {}
