import { Component, OnInit } from '@angular/core';
import { bdservice } from '../welcom/bdervice';

@Component({
  selector: 'app-crokette',
  templateUrl: './crokette.component.html',
  styleUrls: ['./crokette.component.css']
})
export class CroketteComponent implements OnInit {
 constructor() {
   this.getinfo()
  }

 getinfo()
 {
      fetch('http://localhost/api/crokette.php').then((res)=>{
        return res.json();
       
        
       }).then((res)=>{
         this.lcr=res;
       })
       
 
     
 }
 
  lcr:any;
 

  ngOnInit(): void {
  }

}
