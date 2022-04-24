import { HttpClient } from '@angular/common/http';
import { bdservice } from '../welcom/bdervice';
import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {  
  da:any = []
 

    
    
    
   
  

constructor() {

this.chargerclient()
    
   }

chargerclient()
{
  fetch('http://localhost/api/client.php').then((res)=>
  {
    return res.json();
  }).then((res)=>
  {
    console.log(res);
    this.admin=res;
  })
}


supression(bt:any)
{
  
 let data={"id":bt}
  fetch('http://localhost/api/spclient.php',{
    method:'POST',
    body:JSON.stringify(data),

}).then((rep)=>
{
  return rep.json();
}).then((rep)=>
{
  console.log(rep);
})

}
mail:any;
pass:any;

modifier(bt:any)
{
  var ch=bt+'e';
  this.mail=document.getElementById(ch);
  this.pass=document.getElementById(bt+'p');



 let data={
  'emailpast':bt,
'emailnew':this.mail.value,
'mdpnew':this.pass.value};
console.log(this.mail);
console.log(this.pass);
  fetch('http://localhost/api/modifiercl.php',{
method:'POST',
body:JSON.stringify(data),

}).then((resp)=>
{
  return resp.json();
}).then((resp)=>
{
  console.log(resp);
})


alert('Mise a jour!')

}


  
   


 admin:any;


}


