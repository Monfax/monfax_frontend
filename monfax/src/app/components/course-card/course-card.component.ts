import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { Subject } from 'src/app/shared/models/subject.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule]
})
export class CourseCardComponent  implements OnInit {

  @Input() 
  course!: Subject;

  constructor() { }

  ngOnInit() {}

}
