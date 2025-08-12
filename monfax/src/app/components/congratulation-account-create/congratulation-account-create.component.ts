import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-congratulation-account-create',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './congratulation-account-create.component.html',
  styleUrls: ['./congratulation-account-create.component.scss'],
})
export class CongratulationAccountCreateComponent {

  
  @Input() avatarPath: string = 'assets/default-avatar.png';


  @Input() message: string = 'Votre action a été réalisée avec succès.';
}
