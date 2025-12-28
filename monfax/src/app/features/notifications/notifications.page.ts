import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone:true,
  imports:[IonicModule,CommonModule]
})
export class NotificationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
