import { Component, Input } from '@angular/core';
import { IonicModule, LoadingController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PdfService } from 'src/app/core/services/pdf.service';
import { ExamDetails } from 'src/app/shared/services/exam-transform.service';

@Component({
  selector: 'app-exam-card',
  templateUrl: './exam-card.component.html',
  styleUrls: ['./exam-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ExamCardComponent {
  @Input() exam!: ExamDetails;
  @Input() direction: 'row' | 'column' = 'row';

  loadingExam = false;
  loadingCorrection = false;

  constructor(private pdfService: PdfService, private loadingCtrl: LoadingController) {}

  async onOpenPdf(pdfUrl: string, type: 'exam' | 'correction'): Promise<void> {
    // Affiche le loader correspondant
    if (type === 'exam') this.loadingExam = true;
    else this.loadingCorrection = true;

    const loading = await this.loadingCtrl.create({
      message: type === 'exam' ? 'Ouverture de l’examen...' : 'Ouverture de la correction...',
      spinner: 'circles',
      duration: 5000
    });
    await loading.present();

    try {
      await this.pdfService.openPdf(pdfUrl);
    } finally {
      loading.dismiss();
      this.loadingExam = false;
      this.loadingCorrection = false;
    }
  }
}
