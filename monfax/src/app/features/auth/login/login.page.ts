import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Connexion réussie', this.loginForm.value);
      // Naviguer vers la page principale
      this.router.navigate(['/tabs']);
      this.errorMessage = ''; // Réinitialiser le message d'erreur
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
    }
  }

  googleLogin() {
    console.log('Connexion Google cliquée');
    // Ajoutez ici la logique pour la connexion Google (par ex. intégration avec un service d'authentification)
    // Exemple : this.router.navigate(['/tabs']) après succès
  }
}