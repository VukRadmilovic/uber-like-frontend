import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PassengerAccountComponent} from "./passenger-account/passenger-account.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginRegisterComponent} from "./login-register/login-register.component";

const routes: Routes = [
  {path: "account", component: PassengerAccountComponent },
  {path: "entrance", component: LoginRegisterComponent },
  {path: '', redirectTo:'/entrance', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
