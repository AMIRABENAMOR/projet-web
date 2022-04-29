import { Component, OnInit } from '@angular/core';
import { bdservice } from '../welcom/bdervice';

@Component({
  selector: 'app-clientdash',
  templateUrl: './clientdash.component.html',
  styleUrls: ['./clientdash.component.css']
})
export class ClientdashComponent implements OnInit {

  constructor() {
    
    this.loaddata();
  }

  ngOnInit() {
   
  }
 loaddata()
{
fetch('http://localhost/api/produit.php').then((resp)=>
{
  return resp.json();
}
).then((res)=>
{
 
  this.cc=res
  alert(this.cc);
})
}
prod:any
supra(idprod:any)
{
  alert('deleted');
 this.prod={'idprod':idprod}
  fetch('http://localhost/api/deleteproduct.php',{
    method:'post',
    body:JSON.stringify(this.prod)
  }).then((res)=>
  {
    return res.json();
  }).then((res)=>
  {
      alert(JSON.parse(JSON.stringify(res)));
  })


}
data:any;
nom:any;
stock:any;
newws:any;
newwnom:any;
valide:any;
modifier(bt:any)
{
  var ch=bt+"nom";
  this.nom=document.getElementById(ch);
   this.newwnom=this.nom.value;
 


  var ch=bt+"stock";
  this.stock=document.getElementById(ch);
   this.newws=this.stock.value;

   var ch=bt+"stock";
   this.valide=document.getElementById(ch);
    this.valide=this.valide.value;
 
if(this.newws=='')
{
  this.newws=this.stock.placeholder;
}
if(this.newwnom=='')
{
  this.newwnom=this.nom.placeholder;
}



   this.data={'id':bt,
   'nom':this.newwnom,
   'stock':this.newws,
   'nvalidation':this.valide
};
fetch('http://localhost/api/modifierpd.php',{
    method:'post',
    body:JSON.stringify(this.data)
  }).then((res)=>
  {
    return res.json();
  }).then((res)=>
  {
      alert(JSON.parse(JSON.stringify(res)));
  })


}



cc:any;









}
