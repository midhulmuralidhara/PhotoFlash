import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelpModule } from '../appfeatures/help/help.module';
import { HomescreenModule } from '../appfeatures/homescreen/homescreen.module';
import { PhotogalleryModule } from '../appfeatures/photogallery/photogallery.module';
import { UserloginModule } from '../appfeatures/userlogin/userlogin.module';
import { HomescreenComponent } from '../appfeatures/homescreen/homescreen.component';
import { UserloginComponent } from '../appfeatures/userlogin/userlogin.component';
import { HelpComponent } from '../appfeatures/help/help.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HelpModule,
    HomescreenModule,
    PhotogalleryModule,
    UserloginModule,
    RouterModule.forRoot([
      { path: 'home', component: HomescreenComponent },
      { path: 'login', component: UserloginComponent },
      { path: 'help', component: HelpComponent },
      { path: '', redirectTo:'home',pathMatch:'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
