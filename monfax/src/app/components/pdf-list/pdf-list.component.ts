// src/app/pdf-list/pdf-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PdfThumbnailService } from '../../core/services/pdf-thumbnail.service';
import { ExamWithThumbnail } from '../../shared/models/exam.model';

@Component({
  selector: 'app-pdf-list',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './pdf-list.component.html',
  styleUrls: ['./pdf-list.component.scss'],
})
export class PdfListComponent implements OnInit {
  // L'observable contient maintenant directement la liste complète.
  pdfList$!: Observable<ExamWithThumbnail[]>;

  constructor(private pdfService: PdfThumbnailService) {}

  ngOnInit() {
    this.loadPdfList();
  }

  // Méthode simplifiée pour charger les données.
  loadPdfList() {
    this.pdfList$ = this.pdfService.getExamsWithThumbnails();
  }

  openPdf(url: string) {
    window.open(url, '_blank');
  }
}