import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Subject,subjectMock } from '../shared/models/subject.model';
import { Semester,semesterMock } from '../shared/models/semester.model';
import { CourseCardComponent } from '../components/course-card/course-card.component';
import { Video, videoMock } from '../shared/models/video.model';
import { VideoCardComponent } from '../components/video-card/video-card.component';
import { enrichSubjectsWithCourses } from '../shared/services/lecture-course.service';
import { lectureCourseMock } from '../shared/models/lecture-course.model';

@Component({
  selector: 'app-cours',
  templateUrl: 'cours.page.html',
  styleUrls: ['cours.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    CourseCardComponent,
    VideoCardComponent 
  ]
})
export class CoursPage {

  SemestresData:Semester[]=semesterMock

  cours:Subject[]=enrichSubjectsWithCourses(subjectMock,lectureCourseMock)

  videos:Video[]=videoMock

  visible:boolean=false

  selectedSemestre: string | null = null;

  selectedContenu: string= 'Cours'

  selectSemestre(semestre: string | null) {
    this.selectedSemestre = semestre;
  }
  selectContenu(contenu:string){
    this.selectedContenu=contenu
  }

  setVisible(){
    this.visible=true
  }
  closeSide(){
    this.visible=false
  }



}
