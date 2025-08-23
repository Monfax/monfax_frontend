import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-cours',
  templateUrl: 'cours.page.html',
  styleUrls: ['cours.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,

  ]
})
export class CoursPage {}
