import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { CongratulationAccountCreateComponent } from '../components/congratulation-account-create/congratulation-account-create.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    CongratulationAccountCreateComponent
  ]
})
export class Tab1Page {}
