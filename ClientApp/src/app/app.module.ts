import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelpModule } from '../help/help.module';
import { HomescreenModule } from '../homescreen/homescreen.module';
import { PhotogalleryModule } from '../photogallery/photogallery.module';
import { UserloginModule } from '../userlogin/userlogin.module';
import { HomescreenComponent } from '../homescreen/homescreen.component';
import { UserloginComponent } from '../userlogin/userlogin.component';
import { HelpComponent } from '../help/help.component';


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
