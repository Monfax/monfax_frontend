import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-security',
  templateUrl: './security.page.html',
  standalone:true,
  styleUrls: ['./security.page.scss'],
  imports:[IonicModule,CommonModule]
})
export class SecurityPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
