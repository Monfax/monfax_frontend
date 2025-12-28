import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {Router} from '@angular/router'
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

  @Input() 
  direction: 'row' | 'column' = 'row';

  @Input()
  isPaid:boolean=false


  
  constructor(private router:Router) {}

  onOpenSubject(id:number,name:string){
    this.router.navigate(
      ['/lecture-course-page'],
      {queryParams: {id: encodeURIComponent(id.toString()),name: encodeURIComponent(name)}}
    )
  }

  ngOnInit() {}

}
