import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hm',
  templateUrl: './hm.component.html',
  styleUrls: ['./hm.component.css']
})
export class HmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
nm:any;
data:any;
envoyer()
{
 
  this.nm=document.getElementById('name');
  var nom=this.nm.value;
  this.nm=document.getElementById('op');
  var anim=this.nm.value;
  this.nm=document.getElementById('checkin');
  
  var datedeb=this.nm.value;

  this.nm=document.getElementById('checkout');
  var datef=this.nm.value;
 
  
  
this.data={'nom':nom,
'type':anim,
'datedeb':datedeb,
'datef':datef,
'client':localStorage.getItem('email'),
'carnet':"http//carnet/sd//",
"animale":"dog"};


fetch('http://localhost/api/reservation.php',{
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
da:any;
em:any;
inscrire()
{
 this.em=document.getElementById('email'); 
 var m=this.em.value;
 alert(m);
 this.da={'email':m};
  
  fetch('http://localhost/api/newletter.php',{
    method:'post',
    body:JSON.stringify(this.da)
  }).then((res)=>
  {
    return res.json();
  }).then((res)=>
  {
      alert(JSON.parse(JSON.stringify(res)));
  })
}

}
