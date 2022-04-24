//import { decimalDigest } from '@angular/compiler/src/i18n/digest';
//import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
//import { SSL_OP_TLS_BLOCK_PADDING_BUG } from 'constants';
//import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';
//import { createCipheriv } from 'crypto';
//import { info } from 'console';
import { bdservice } from 'src/app/welcom/bdervice';
@Component({
  selector: 'frst',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent {
  j=0;
  k="";
x="";
dt=new bdservice();
data=this.dt.doget();
cat1="accessoire";
n=this.data.length;

laccess=this.dt.dogetacess();
va=false;

id=0;
check()
{
  this.va=true;
}
reclame()
{
  alert("OUT-OF-STOCK");
}
constructor()
{}




c="30";
i="https://i.pinimg.com/originals/52/e4/69/52e469fd37d18b4228cd93a77477d9f6.jpg";


annonace()
{
  alert('out Of stock');
}
generer()
{
  this.id=this.id+1;
  return this.id;
}

test()
{
  

this.j=this.j+1;
if(this.j===9)
{
  
  this.j=0;
  return false;
}
else
{
  return true;
}
}

}




