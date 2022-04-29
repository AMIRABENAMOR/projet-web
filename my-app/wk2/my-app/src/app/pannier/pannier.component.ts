import { Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { bdservice } from '../welcom/bdervice';

@Component({
  selector: 'app-pannier',
  templateUrl: './pannier.component.html',
  styleUrls: ['./pannier.component.css']
})
export class PannierComponent implements OnInit {



  ngOnInit(): void {
this.cc();

  }
cc()
  
{

}
  constructor() {


this.getinfo();
  
   }
 


  getinfo()
{
     this.fact=JSON.parse((localStorage.getItem('panier'))||'');
     console.log(this.fact);
    

    
}

  

  
fact: any ;
delete(i :any)
{
  var jetable=this.fact;
  
  
   var dv=document.getElementById(i);

   
   if(dv!=null)
   {
  dv.innerHTML="";
 
   }

   for(var j=0;j<jetable.length;j++)
   {
     if(jetable[j].idprd!=i)
     {
       this.fact.push(jetable[j]);
     }
   }


}

qt=1;
dt:any;
addquantity(bt:any)
{
  let ch=bt+'qt';
  alert(ch);

  
  


  
 
}

dd:any
addfact(btn:any)
{
let ch=localStorage.getItem('email');
alert(ch);

this.dd={'id':btn,
'email':ch,
'qt':0};
  fetch('http://localhost/api/mipanier.php',{
    method:'post',
    body:JSON.stringify(this.dd)
  }).then((res)=>
  {
    return res.json();
  }).then((res)=>
  {
      alert(JSON.parse(JSON.stringify(res)));
  })





}











miproduct(bt:any)
{
  let ch=bt+'qt';
  


}
  
}












  








