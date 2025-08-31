import { ExamType } from './../shared/models/exam-type.enum';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {ExamWithThumbnail,examMock } from '../shared/models/exam.model';
import { Semester,semesterMock } from '../shared/models/semester.model';
import { Subject, subjectMock } from '../shared/models/subject.model';
import { programMock } from '../shared/models/program.model';
import { ExamTransformService,ExamDetails } from 'src/app/shared/services/exam-transform.service';
import { Correction, correctionMock } from '../shared/models/correction.model';
import { ExamCardComponent } from '../components/exam-card/exam-card.component';
@Component({
  selector: 'app-mon-bord',
  templateUrl: './mon-bord.page.html',
  styleUrls: ['./mon-bord.page.scss'],
  standalone: true,
  imports:[
    IonicModule,
    CommonModule,
    FormsModule,
    ExamCardComponent
  ]
})
export class MonBordPage implements OnInit {

  examData:ExamWithThumbnail[]=examMock
  semestresData:Semester[]=semesterMock

  initialSemester:Semester={ id: 0, name: "TOUT", price: 0, program: programMock[0], subjects: [] }

  selectedSemester:Semester=this.initialSemester
  examTypes:string[]=["TOUT",ExamType.CONTINUOUS_ASSESSMENT,ExamType.MAIN_EXAM,ExamType.RESIT]
  selectedExamType='TOUT'

  subjects:Subject[]=subjectMock

  corrections:Correction[]=correctionMock

  examDetailsList: ExamDetails[] = [];

  availableYears:number[]=[];
  selectedYear:number=0
  initialValue=0
  visible=false
  setVisible(){
    this.visible=!this.visible
  }
  getSubjectByExam(examSubjectId: number) {
    return this.subjects.find(s => s.id === examSubjectId);
  }

  getSemesterNameByExam(examSubjectId: number): string {
    const subject = this.getSubjectByExam(examSubjectId);
    if (!subject) return 'Semestre inconnu';

    const semester = this.semestresData.find(se => se.id === Number(subject.semester_id));
    return semester ? semester.name : 'Semestre inconnu';
  }
  getFiliere(examSubjectId: number): string {
    const subject = this.getSubjectByExam(examSubjectId);
    return subject ? subject.filiere : 'Filière inconnue';
  }

  getNiveau(examSubjectId: number): string {
    const subject = this.getSubjectByExam(examSubjectId);
    return subject ? subject.niveau : 'Niveau inconnu';
  }
  get filteredExam(){
    if(this.selectedExamType==='TOUT' && this.selectedYear===0 && this.selectedSemester.name==='TOUT')
      return this.examDetailsList

    if (this.selectedExamType==='TOUT'&& this.selectedSemester.name==='TOUT' )
      return this.examDetailsList.filter(exam=>exam.year==this.selectedYear)

    if(this.selectedExamType==='TOUT'&& this.selectedYear===0)
      return this.examDetailsList.filter(exam=> exam.semesterName===this.selectedSemester.name)
    
    if(this.selectedSemester.name==='TOUT' && this.selectedYear===0)
      return this.examDetailsList.filter(exam=>exam.examType===this.selectedExamType)

    if( this.selectedYear===0)
      return this.examDetailsList.filter(exam=>exam.examType===this.selectedExamType && exam.semesterName===this.selectedSemester.name)
    
    if(this.selectedExamType==='TOUT')
      return this.examDetailsList.filter(exam=> exam.semesterName===this.selectedSemester.name && exam.year==this.selectedYear)

    if(this.selectedSemester.name==='TOUT')
      return this.examDetailsList.filter(exam=>exam.examType===this.selectedExamType  && exam.year==this.selectedYear)

    return this.examDetailsList.filter(exam=>exam.examType===this.selectedExamType && exam.semesterName===this.selectedSemester.name && exam.year==this.selectedYear)
  }
  constructor(private examTransformService: ExamTransformService) { }

  ngOnInit() {
    const currentYear=new Date().getFullYear()
    for (let y = currentYear; y>=2018;y--)
      this.availableYears.push(y)
    this.examDetailsList = this.examTransformService.transformExamsToDetails(
      this.examData,
      this.subjects,
      this.semestresData,
      this.corrections,
    
    );
  }

}
