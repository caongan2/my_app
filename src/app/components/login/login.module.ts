import {NgModule} from "@angular/core";
import {ChildComponent} from "./child/child.component";
import {LoginComponent} from "./login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@NgModule({
  declarations: [
    LoginComponent,
    ChildComponent
  ],
  exports: [
  ],
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    NgIf
  ]
})
export class LoginModule {

}
