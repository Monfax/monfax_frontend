import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.page.html',
  standalone:true,
  styleUrls: ['./dark-mode.page.scss'],
  imports:[IonicModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DarkModePage implements OnInit {

  darkMode = false;
  
  constructor() { }

  ngOnInit() {
  }

}
