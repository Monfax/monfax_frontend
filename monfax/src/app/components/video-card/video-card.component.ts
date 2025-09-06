import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Video } from 'src/app/shared/models/video.model';

@Component({
  selector: 'app-video-card',
  standalone:true,
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  imports:[IonicModule,CommonModule]
})
export class VideoCardComponent  implements OnInit {

  @Input() 
  video!: Video;

  @Input() 
  direction: 'row' | 'column' = 'row';



  constructor() { }

  ngOnInit() {}

}
