import { Component, OnInit } from '@angular/core';
import { bdservice } from '../welcom/bdervice';

@Component({
  selector: 'app-hermess2',
  templateUrl: './hermess2.component.html',
  styleUrls: ['./hermess2.component.css']
})
export class Hermess2Component 
{
  constructor() { }


sr=new bdservice();
hm2=this.sr.dogetacess2();

myevent()
{
  alert("ok");
}
}
