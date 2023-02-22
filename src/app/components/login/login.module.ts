import {NgModule} from "@angular/core";
import {ChildComponent} from "./child/child.component";
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@NgModule({
  declarations: [
    LoginComponent,
    ChildComponent
  ],
  exports: [
    // LoginComponent
  ],
  imports: [
    FormsModule,
    NgForOf
  ]
})
export class LoginModule {

}
