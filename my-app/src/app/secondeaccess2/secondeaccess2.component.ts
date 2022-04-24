import { Component, OnInit } from '@angular/core';
import { bdservice } from '../welcom/bdervice';

@Component({
  selector: 'app-secondeaccess2',
  templateUrl: './secondeaccess2.component.html',
  styleUrls: ['./secondeaccess2.component.css']
})
export class Secondeaccess2Component implements OnInit {







  constructor() {

    this.getinfo();
   }

      

  ngOnInit(): void {

  }
ls:any;

  getinfo()
  {
       fetch('http://localhost/api/controle.php').then((res)=>{
         return res.json();
        
         
        }).then((res)=>{
          this.ls=res;
        })
        
  
      
  }



  

  
  
}
