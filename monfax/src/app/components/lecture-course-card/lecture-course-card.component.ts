import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule,LoadingController  } from '@ionic/angular';
import { LectureCourseWithThumbnail } from 'src/app/shared/models/lecture-course.model';
import { PdfService } from 'src/app/core/services/pdf.service';

@Component({
  selector: 'app-lecture-course-card',
  templateUrl: './lecture-course-card.component.html',
  standalone:true,
  styleUrls: ['./lecture-course-card.component.scss'],
  imports:[IonicModule,CommonModule]
  
})
export class LectureCourseCardComponent  implements OnInit {



  constructor(private pdfService: PdfService, private loadingCtrl: LoadingController) {}

  ngOnInit() {}

  @Input()
  course!: LectureCourseWithThumbnail

  loadingCourse = false;
  async onOpenCoursePdf(pdfUrl: string ): Promise<void> {
    
    this.loadingCourse = true;
    

    const loading = await this.loadingCtrl.create({
      message:'Ouverture du support de cours...',
      spinner: 'circles',
      duration: 5000
    });
    await loading.present();

    try {
      await this.pdfService.openPdf(pdfUrl);
    } finally {
      loading.dismiss();
      this.loadingCourse = false;
    
    }
  }

}
