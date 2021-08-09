import {  Routes } from "@angular/router";
import { HelpComponent } from "../appfeatures/help/help.component";
import { HomescreenComponent } from "../appfeatures/homescreen/homescreen.component";
import { UserloginComponent } from "../appfeatures/userlogin/userlogin.component";

export const routes: Routes = [{ path: 'home', component: HomescreenComponent },
  { path: 'login', component: UserloginComponent },
  { path: 'help', component: HelpComponent },
  { path: '', redirectTo:'home', pathMatch:'full' }]






