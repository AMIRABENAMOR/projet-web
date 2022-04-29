import { Component, OnInit } from '@angular/core';
import { bdservice } from '../welcom/bdervice';

@Component({
  selector: 'app-shampo',
  templateUrl: './shampo.component.html',
  styleUrls: ['./shampo.component.css']
})
export class ShampoComponent  {
  

  constructor() {
    this.getinfo();
   }

  ngOnInit(): void {
  }


  shmpo:any;

panier:any=[];
 
   getinfo()
   {
        fetch('http://localhost/api/shampo.php').then((res)=>{
          return res.json();
         
          
         }).then((res)=>{
           this.shmpo=res;
         })
         
   
       
   }
 




  
  envoyer(add:any)
  {
          this.panier.push(add.id);

console.log(add);
 
  
     localStorage.setItem('panier',JSON.stringify(this.panier));

    

    
    
    
   

  }
  


}
