import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss']
})
export class PaiementPage {
  offers = [
    { id: 1, name: 'Abonnement Basic', price: 2000 },
    { id: 2, name: 'Abonnement Premium', price: 5000 },
    { id: 3, name: 'Abonnement Business', price: 10000 },
  ];

  selectedOffer: any = null;
  transactionId: string = '';

  constructor() {}

  generateTransactionId(): string {
    return 'TX-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
  }

  selectOffer(offer: any) {
    this.selectedOffer = offer;
    this.transactionId = this.generateTransactionId();
  }

  async generatePDF() {
    if (!this.selectedOffer) return;

    const doc = new jsPDF();

    //  Logo (image en Base64 ou URL convertie)
    const logoUrl = 'assets/logo-monfax.png'; // place ton logo dans src/assets/
    const logo = await this.loadImageAsBase64(logoUrl);
    if (logo) {
      doc.addImage(logo, 'PNG', 150, 10, 40, 20); // x, y, width, height
    }

    //  En-tête
    doc.setFontSize(18);
    doc.text('Facture Pré-Paiement', 20, 20);

    doc.setFontSize(12);
    doc.text(`Transaction ID : ${this.transactionId}`, 20, 40);
    doc.text(`Date : ${new Date().toLocaleDateString()}`, 20, 50);

    //  Détails de l’achat
    doc.setFontSize(14);
    doc.text('Détails de l\'achat', 20, 70);

    doc.setFontSize(12);
    doc.text(`Offre choisie : ${this.selectedOffer.name}`, 20, 85);
    doc.text(`Prix : ${this.selectedOffer.price} FCFA`, 20, 95);

    //  Méthodes de paiement
    doc.setFontSize(14);
    doc.text('Méthodes de paiement', 20, 115);

    doc.setFontSize(12);
    doc.text('- Orange Money: 699 00 00 00', 30, 125);
    doc.text('- MTN Mobile Money: 650 00 00 00', 30, 135);

    // ✅ Mentions légales
    doc.setFontSize(10);
    doc.text('--- Mentions légales ---', 20, 250);
    doc.text(
      'Ce document est un pré-paiement généré automatiquement. ' +
      'Veuillez effectuer le paiement via l\'une des méthodes ci-dessus. ' +
      'Aucune valeur légale sans confirmation du service.',
      20,
      260,
      { maxWidth: 170 }
    );

    // ✅ Sauvegarde
    doc.save(`prepayment-${this.transactionId}.pdf`);
  }

  // Convertir image en Base64 (pour l’ajout dans jsPDF)
  loadImageAsBase64(url: string): Promise<string | null> {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL('image/png'));
        } else {
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
    });
  }
}
