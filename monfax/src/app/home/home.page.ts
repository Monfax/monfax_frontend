import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { CongratulationAccountCreateComponent } from '../components/congratulation-account-create/congratulation-account-create.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    CongratulationAccountCreateComponent
  ]
})
export class HomePage {}
