// import { SwiperModule } from 'swiper/angular';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExamWithThumbnail, examMock } from '../shared/models/exam.model';
import { Semester,semesterMock } from '../shared/models/semester.model';
import { User,userMock } from '../shared/models/user.model';
import { Subject, subjectMock } from '../shared/models/subject.model';
import { PdfService } from '../core/services/pdf.service';
import { BanniereBuyComponent } from '../components/banniere-buy/banniere-buy.component';
import { BannierePubComponent } from '../components/banniere-pub/banniere-pub.component';
import { ExamDetails,ExamTransformService } from '../shared/services/exam-transform.service';
import { Correction, correctionMock } from '../shared/models/correction.model';
import { ExamCardComponent } from '../components/exam-card/exam-card.component';
import { CourseCardComponent } from '../components/course-card/course-card.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BanniereBuyComponent,
    BannierePubComponent,
    ExamCardComponent,
    CourseCardComponent
  ]
})
export class HomePage {

    SemestresData:Semester[]=semesterMock

    current_user:User=userMock[0]

    niveaux:string[]=["Licence 1","Licence 2","Licence 3", "Master 1","Master 2"]

    subjects: Subject[] = subjectMock;
    
    selectedSemestre: string | null = null;

    exams:ExamWithThumbnail[]=examMock

    corrections:Correction[]=correctionMock

    examDetailsList: ExamDetails[] = [];

    images:string[]=[
      'assets/images/image-1.png',
      'assets/images/image-2.png',
      'assets/images/image-4.png',
      ]
      slideOptions={
        autouplay:{
          delay:3000,
        },
        loop:true
      }

    selectSemestre(semestre: string | null) {
      this.selectedSemestre = semestre;
    }

    constructor(private pdfService:PdfService,private examTransformService: ExamTransformService) {}

    ngOnInit() {
      this.examDetailsList = this.examTransformService.transformExamsToDetails(
        this.exams,
        this.subjects,
        this.SemestresData,
        this.corrections
      );
    }

    onOpenPdf(pdfUrl:string){
      this.pdfService.openPdf(pdfUrl)
    }

}