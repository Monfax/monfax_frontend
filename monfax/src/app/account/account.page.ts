import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule]
})
export class AccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
