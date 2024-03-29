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
import { routes } from './app.routing';
import { CommonfeatureModule } from '../appfeatures/common/commonfeature.module';
import { RouteGuard } from './app.routeguard';
import { HttpService } from 'src/genericservices/httpcommon.service';
import { ClientConfigurationService } from 'src/genericservices/clientconfiguration.service';
import { GoliveModule } from 'src/appfeatures/golive/golive.module';
import { ConfigValuesService } from 'src/genericservices/configvalues.service';


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
    CommonfeatureModule,
    RouterModule.forRoot(routes),
    GoliveModule
  ],
  providers: [RouteGuard,HttpService,ClientConfigurationService, ConfigValuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
