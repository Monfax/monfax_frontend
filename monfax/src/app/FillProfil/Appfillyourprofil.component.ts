
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({ selector: 'app-fill-your-profile',templateUrl: './fill-your-profile.component.html', styleUrls: ['./fill-your-profile.component.scss'],
})
export class FillYourProfileComponent implements OnInit {
  // Propriétés pour stocker les valeurs du formulaire
  public fullName: string = '';
  public nickName: string = '';
  public dateOfBirth: string = '';
  public email: string = '';
  public gender: string = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Logique d'initialisation
  }

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