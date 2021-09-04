import {  Routes } from "@angular/router";
import { GoLiveComponent } from "src/appfeatures/golive/golive.component";
import { HelpComponent } from "../appfeatures/help/help.component";
import { HomescreenComponent } from "../appfeatures/homescreen/homescreen.component";
import { UserloginComponent } from "../appfeatures/userlogin/userlogin.component";
import { RouteGuard } from "./app.routeguard";

export const routes: Routes = [{ path: 'home', component: HomescreenComponent,canActivate:[RouteGuard] },
  { path: 'login', component: UserloginComponent,canActivate:[RouteGuard] },
  { path: 'help', component: HelpComponent,canActivate:[RouteGuard] },
  { path: 'golive', component: GoLiveComponent,canActivate:[RouteGuard] },
  { path: '', redirectTo:'home', pathMatch:'full' }]






