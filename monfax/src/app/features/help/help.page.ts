import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  standalone:true,
  styleUrls: ['./help.page.scss'],
  imports:[IonicModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
