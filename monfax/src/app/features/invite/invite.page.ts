import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InvitePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
