import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  standalone:true,
  styleUrls: ['./terms.page.scss'],
  imports:[IonicModule,CommonModule]

})
export class TermsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
