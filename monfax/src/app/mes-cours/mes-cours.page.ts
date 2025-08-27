import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BanniereBuyComponent } from '../components/banniere-buy/banniere-buy.component';
import { CourseCardComponent } from '../components/course-card/course-card.component';
import { Subject } from '../shared/models/subject.model';



@Component({
  selector: 'app-tab2',
  templateUrl: 'mes-cours.page.html',
  styleUrls: ['mes-cours.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    BanniereBuyComponent,
    CourseCardComponent
  ]
})
export class MesCoursPage {

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
    id: 3,
    name: 'Langage Formel et Compilation',
    price: 400,
    semester_id: '3',
    exams: [],
    videos: [],
    lectureCourses: [],
    payments: [],
    filiere: 'Informatique',
    niveau: 'Licence 3'
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

  visible=false

  setVisible(){
    this.visible=!this.visible
  }



}
