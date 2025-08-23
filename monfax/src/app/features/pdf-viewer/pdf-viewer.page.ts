import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ActivatedRoute } from '@angular/router';
import { GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [CommonModule, IonicModule, PdfViewerModule],
  templateUrl: './pdf-viewer.page.html',
  styleUrls: ['./pdf-viewer.page.scss']
})
export class PdfViewerPage implements OnInit {
  pdfUrl: string | null = null;
  loading = true;
  zoomLevel=1
  // url:string[]=this.pdfUrl?.split('/')||['']
  // taille=this.url?.length
  // docName=this.url[this.taille-1]

  constructor(private route: ActivatedRoute,private navCtrl:NavController) {}

  ngOnInit() {
    // Configure le worker PDF.js local
    GlobalWorkerOptions.workerSrc = '/assets/pdfjs/pdf.worker.min.js';

    // Récupère le PDF depuis la queryParam
    this.route.queryParams.subscribe(params => {
      this.pdfUrl = params['url'] ? decodeURIComponent(params['url']) : null;
    });
    
  }
  
  zoomIn(){
    this.zoomLevel +=0.1
  }

  zoomOut(){
    if(this.zoomLevel>0.5)
      this.zoomLevel -= 0.1
  }
  goBack(){
    this.navCtrl.back()
  }
  onLoadComplete() {
    this.loading = false;
  }

  

}
