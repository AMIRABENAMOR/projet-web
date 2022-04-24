import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {
  inscrire()
  {
     this.email=document.getElementById('emailo');
      this.nom=document.getElementById('nom');
    this.mdp=document.getElementById('mdp');
    this.cmdp=document.getElementById('cmdp');
   this.data={'email':this.email.value,
  'nom':this.nom.value,
'mdp':this.mdp.value,
'cmdp':this.cmdp.value};
  fetch('http://localhost/api/inscrire.php',{
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



  constructor() { }

  ngOnInit(): void {
  }
data:any;
email:any;
nom:any;
mdp:any;
cmdp:any;

}
