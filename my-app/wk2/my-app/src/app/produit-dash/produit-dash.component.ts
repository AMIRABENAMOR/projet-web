import { Component, OnInit } from '@angular/core';
import { bdservice } from '../welcom/bdervice';

@Component({
  selector: 'app-produit-dash',
  templateUrl: './produit-dash.component.html',
  styleUrls: ['./produit-dash.component.css']
})
export class ProduitDashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
bd=new bdservice();
pd=this.bd.js;
}
