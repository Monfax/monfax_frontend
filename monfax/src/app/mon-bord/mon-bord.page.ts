import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mon-bord',
  templateUrl: './mon-bord.page.html',
  styleUrls: ['./mon-bord.page.scss'],
  standalone: true,
  imports:[IonicModule,CommonModule]
})
export class MonBordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
