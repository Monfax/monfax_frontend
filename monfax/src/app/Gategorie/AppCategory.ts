import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  // Liste des catégories avec leur nom et une URL SVG pour l'icône.
  // En production, ces données viendraient probablement d'un service.
  public categories = [
    { name: '3D Design', iconUrl: 'assets/3d-design.svg' },
    { name: 'Graphic Design', iconUrl: 'assets/graphic-design.svg' },
    { name: 'Web Development', iconUrl: 'assets/web-development.svg' },
    { name: 'SEO & Marketing', iconUrl: 'assets/seo-marketing.svg' },
    { name: 'Finance & Accounting', iconUrl: 'assets/finance.svg' },
    {
      name: 'Personal Development',
      iconUrl: 'assets/personal-development.svg',
    },
    { name: 'Office Productivity', iconUrl: 'assets/office-productivity.svg' },
    { name: 'HR Management', iconUrl: 'assets/hr-management.svg' },
  ];

  constructor() {}

  /**
   * @description Gère le clic sur une catégorie.
   * Vous pouvez ajouter ici une logique de navigation.
   */
  public selectCategory(categoryName: string): void {
    console.log('Catégorie sélectionnée:', categoryName);
    // Ajoutez votre logique de navigation ici
  }
}
