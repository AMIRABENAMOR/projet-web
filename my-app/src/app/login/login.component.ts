import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Router } from '@angular/router';
//import { runInThisContext } from 'vm';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private route:Router) { }
  
  verfier()
  {
   this.email=document.getElementById('email');
   this.mdp=document.getElementById('mdp');
   
   var mm=this.email.value;
   var mp=this.mdp.value;
    

     this.data={'email':mm,
  'mdp':mp}
  

  fetch('http://localhost/api/login.php',
  {
    method:'post',
    body:JSON.stringify(this.data),
  
  }).then((res)=>
  {
return res.json();

}).then((res)=>{
  console.log((res));
  this.login=JSON.parse(res);
  console.log(res);
  


});
if((mm=="admin@istic.com")&&(mp=="adminadmin"))
{
  localStorage.setItem('email',mm);
  localStorage.setItem('mdp',mp); 
  
  
 
   this.route.navigate(['/clnt']);
  


}

if((mm="admin@isigk.com")&&(mp=="adminadmin"))
{
  localStorage.setItem('email',mm);
  localStorage.setItem('mdp',mp); 
  
  
 
   this.route.navigate(['/dash']);
}
    if(this.login==1)
    {
      localStorage.setItem('email',mm);
    localStorage.setItem('mdp',mp); 
    
    
   
     this.route.navigate(['/home']);
    
  
  }
 
    
  }
 

  ngOnInit(

    
  ): void {
    
  }
  v:any;
email:any
mdp:any
data:any
ac:any
  
  login:any;

}
