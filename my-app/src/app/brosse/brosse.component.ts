import { Component, OnInit } from '@angular/core';
import { bdservice } from '../welcom/bdervice';

@Component({
  selector: 'app-brosse',
  templateUrl: './brosse.component.html',
  styleUrls: ['./brosse.component.css']
})
export class BrosseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getinfo();
  }


brosse:any

  getinfo()
  {
       fetch('http://localhost/api/brosse.php').then((res)=>{
         return res.json();
        
         
        }).then((res)=>{
          this.brosse=res;
        })
        
  
      
  }
  panier:any=[];
  envoyer(add:any)
  {
          this.panier.push(add.id);

console.log(add);
 
  
     localStorage.setItem('panier',JSON.stringify(this.panier));

    

    
    
    
   

  }

    
  
  
   
  
  
  }
  


