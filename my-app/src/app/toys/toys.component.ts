import { Component, OnInit } from '@angular/core';
import { bdservice } from '../welcom/bdervice';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getinfo();
  }
toys:any;
  getinfo()
  {
       fetch('http://localhost/api/toys.php').then((res)=>{
         return res.json();
        
         
        }).then((res)=>{
          this.toys=res;
        })
        
  
      
  }
  panier:any=[];

  envoyer(add:any)
  {
          this.panier.push(add);

console.log(add);
 
  
     localStorage.setItem('panier',JSON.stringify(this.panier));

    

    
    
    
   

  }
  

  

  
  
}
