import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrosseComponent } from './brosse/brosse.component';
import { CroketteComponent } from './crokette/crokette.component';
import { FirstComponent } from './first/first.component';
import { Hermess2Component } from './hermess2/hermess2.component';
import { PannierComponent } from './pannier/pannier.component';
import { SecondeaccessComponent } from './secondeaccess/secondeaccess.component';
import { Secondeaccess2Component } from './secondeaccess2/secondeaccess2.component';
import { ShampoComponent } from './shampo/shampo.component';
import { TeamComponent } from './team/team.component';
import { ToysComponent } from './toys/toys.component';


import { AboutComponent } from './about/about.component';
import { HmComponent } from './hm/hm.component';
import { ClientdashComponent } from './clientdash/clientdash.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
//import { FirstComponent } from './first/first.component';

const routes: Routes = [

{path:'clnt',component:ClientdashComponent},
{path:'shop3',component:FirstComponent},
{path:'shop2',component:Hermess2Component},
{path:'shopcr',component:CroketteComponent},

{path:'brosse',component:BrosseComponent},
{path:'toys',component:ToysComponent},
{path:'shampo',component:ShampoComponent},
{path:'stiwar',component:SecondeaccessComponent},

{path:'',component:LoginComponent},
{path:'',component:Secondeaccess2Component,children:[
{path:'shop',component:SecondeaccessComponent},
{path:'about',component:AboutComponent},
{path:'home',component:HmComponent},
{path:'panier',component:PannierComponent},
{path:'team',component:TeamComponent},
]},
 
  
  {path:'dash',component:DashbordComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
