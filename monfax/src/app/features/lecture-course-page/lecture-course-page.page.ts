import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LectureCourseCardComponent } from 'src/app/components/lecture-course-card/lecture-course-card.component';
import { LectureCourseWithThumbnail, lectureCourseMock } from 'src/app/shared/models/lecture-course.model';

@Component({
  selector: 'app-lecture-course-page',
  templateUrl: './lecture-course-page.page.html',
  standalone:true,
  styleUrls: ['./lecture-course-page.page.scss'],
  imports:[IonicModule,CommonModule,LectureCourseCardComponent]
})
export class LectureCoursePagePage implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.subject_id= params['id']? decodeURIComponent(params['id']):null
      this.subject_name= params['name'] ? decodeURIComponent(params['name']):null
    })
  }
  subject_id:string|null=null
  subject_name:string|null=null;
  courses:LectureCourseWithThumbnail[] = lectureCourseMock;
  
  get filteredCourses():LectureCourseWithThumbnail[]{
    return this.courses.filter(course=> course.subject_id===this.subject_id)
  }
}
