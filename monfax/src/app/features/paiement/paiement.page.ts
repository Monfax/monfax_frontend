import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  standalone:true,
  styleUrls: ['./paiement.page.scss'],
  imports: [CommonModule,IonicModule]
})
export class PaiementPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
