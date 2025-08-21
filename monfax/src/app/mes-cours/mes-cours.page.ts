import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tab2',
  templateUrl: 'mes-cours.page.html',
  styleUrls: ['mes-cours.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,

  ]
})
export class MesCoursPage {}
