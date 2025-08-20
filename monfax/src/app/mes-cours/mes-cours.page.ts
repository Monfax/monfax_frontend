import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'mes-cours.page.html',
  styleUrls: ['mes-cours.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ExploreContainerComponent 
  ]
})
export class MesCoursPage {}
