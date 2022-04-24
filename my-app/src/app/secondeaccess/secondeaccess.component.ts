import { Component, OnInit } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
//import { listenerCount } from 'process';
import { bdservice } from '../welcom/bdervice';

@Component({
  selector: 'app-secondeaccess',
  templateUrl: './secondeaccess.component.html',
  styleUrls: ['./secondeaccess.component.css']
})
export class SecondeaccessComponent implements OnInit {
default=false;
  
  myevent(bt:any)
  {
alert(bt.id);

  }
  ngOnInit(): void {
 
  }


  constructor() {
    this.getinfo()
    
  
  }


getinfo()
{
     fetch('http://localhost/api/controle.php').then((res)=>{
       return res.json();
      
       
      }).then((res)=>{
        this.pd=res;
      })
      

    
}

bd:any = []

   panier:any=[];
  envoyer(add:any)
  {
          this.panier.push(add);

console.log(add);
 
  
     localStorage.setItem('panier',JSON.stringify(this.panier));

    

    
    
    
   

  }
  
  pd:any=[];
 
  chercher(b : any)
  {
if(b.value!="")
{
    this.pd=this.bd.srch(b.value);
    
  

  }

  }

}
