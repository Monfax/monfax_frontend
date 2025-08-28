import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BanniereBuyComponent } from '../components/banniere-buy/banniere-buy.component';
import { CourseCardComponent } from '../components/course-card/course-card.component';
import { Subject } from '../shared/models/subject.model';
import { ExamCardComponent } from '../components/exam-card/exam-card.component';
import { Exam, ExamWithThumbnail, examMock } from '../shared/models/exam.model';
import { Correction, correctionMock } from '../shared/models/correction.model';
import { ExamDetails } from '../shared/services/exam-transform.service';
import { ExamTransformService } from '../shared/services/exam-transform.service';
import { Semester, semesterMock } from '../shared/models/semester.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'mes-cours.page.html',
  styleUrls: ['mes-cours.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    BanniereBuyComponent,
    CourseCardComponent,
    ExamCardComponent,
  ]
})
export class MesCoursPage implements OnInit {

  constructor(private examTransformService: ExamTransformService) { }


  courses:Subject[]=[ 
    {
    id: 1,
    name: 'Programmation Java',
    price: 550,
    semester_id: '1',
    exams: [],
    videos: [],
    lectureCourses: [],
    payments: [],
    filiere: 'Informatique',
    niveau: 'Licence 2'
  },
  {
    id: 2,
    name: 'Bases de Données',
    price: 250,
    semester_id: '2',
    exams: [],
    videos: [],
    lectureCourses: [],
    payments: [],
    filiere: 'Informatique',
    niveau: 'Licence 2'
  },
  {
    id: 4,
    name: 'Langage c',
    price: 250,
    semester_id: '1',
    exams: [],
    videos: [],
    lectureCourses: [],
    payments: [],
    filiere: 'Informatique',
    niveau: 'Licence 1'
  }, 
]
exams:ExamWithThumbnail[]=examMock
semestresData:Semester[]=semesterMock


corrections:Correction[]=correctionMock

examDetailsList: ExamDetails[] = [];
  visible=false
  exoVisible=false

  setVisible(){
    this.visible=!this.visible
  }
  setExoVisible(){
    this.exoVisible=!this.exoVisible
  }


  get  filteredExamForMyCourse():ExamDetails[]{
      return this.examDetailsList.filter(exam=>this.courses.some(subj=> subj.id?.toString()===exam.subject_id))
  }

  ngOnInit() {
    this.examDetailsList = this.examTransformService.transformExamsToDetails(
      this.exams,
      this.courses,
      this.semestresData,
      this.corrections,
    
    );
  }


}
