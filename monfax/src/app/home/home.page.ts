import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
// import { PdfListComponent } from '../components/pdf-list/pdf-list.component';
import { FormsModule } from '@angular/forms';
import { ExamWithThumbnail,examMock } from '../shared/models/exam.model';
import { Semester,semesterMock } from '../shared/models/semester.model';
import { User,userMock } from '../shared/models/user.model';
import { Subject, subjectMock } from '../shared/models/subject.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class HomePage {

    SemestresData:Semester[]=semesterMock

    current_user:User=userMock[0]
    niveaux:string[]=["Licence 1","Licence 2","Licence 3", "Master 1","Master 2"]
    subjects: Subject[] = subjectMock;
    
    selectedSemestre: string | null = null;

    Exams:ExamWithThumbnail[]=examMock

    selectSemestre(semestre: string | null) {
      this.selectedSemestre = semestre;
    }

    constructor() {}

    ngOnInit() {}
}