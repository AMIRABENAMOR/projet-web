import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { AboutComponent } from './about/about.component';
import { WelcomComponent } from './welcom/welcom.component';
import { SecondeaccessComponent } from './secondeaccess/secondeaccess.component';
import { Secondeaccess2Component } from './secondeaccess2/secondeaccess2.component';
import { Hermess2Component } from './hermess2/hermess2.component';
import { CroketteComponent } from './crokette/crokette.component';
import { PannierComponent } from './pannier/pannier.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ClientdashComponent } from './clientdash/clientdash.component';
import { ProduitDashComponent } from './produit-dash/produit-dash.component';
import { ShampoComponent } from './shampo/shampo.component';
import { BrosseComponent } from './brosse/brosse.component';
import { ToysComponent } from './toys/toys.component';
import { TeamComponent } from './team/team.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { HmComponent } from './hm/hm.component'


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AboutComponent,
    WelcomComponent,
    SecondeaccessComponent,
    Secondeaccess2Component,
    Hermess2Component,
    CroketteComponent,
    PannierComponent,
    DashbordComponent,
    ClientdashComponent,
    ProduitDashComponent,
    ShampoComponent,
    BrosseComponent,
    ToysComponent,
    TeamComponent,
    LoginComponent,
    InscrireComponent,
    HmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
