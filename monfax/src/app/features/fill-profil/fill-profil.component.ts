import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fill-profil',
  templateUrl: './fill-profil.component.html',
  styleUrls: ['./fill-profil.component.scss'],
  imports:[
    IonicModule,
    CommonModule,
    FormsModule

  ]
})
export class FillProfilComponent  implements OnInit {

  public fullName: string = '';
  public nickName: string = '';
  public dateOfBirth: string = '';
  public email: string = '';
  public gender: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  
    /**
   * @description Gère l'action du bouton "Continue".
   * Normalement, vous traiteriez les données ici et navigeriez vers la page suivante.
   */
  public onContinue(): void {
    console.log('Données du profil soumises:', {
      fullName: this.fullName,
      nickName: this.nickName,
      dateOfBirth: this.dateOfBirth,
      email: this.email,
      gender: this.gender,
    });
    // Exemple de navigation vers la page d'accueil après soumission
    this.navCtrl.navigateForward('/home');
  }
}
