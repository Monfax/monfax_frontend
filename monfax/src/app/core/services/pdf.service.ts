import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PdfService {
  constructor(private router: Router) {}

  openPdf(pdfUrl: string) {
    this.router.navigate(['/pdf-viewer'], { queryParams: { url: encodeURIComponent(pdfUrl) } });
  }
}
