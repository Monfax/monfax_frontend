import { Component, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, IonicSlides } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperOptions } from 'swiper/types';
import Swiper from 'swiper';

@Component({
  selector: 'app-intro-slides',
  templateUrl: './intro-slides.component.html',
  styleUrls: ['./intro-slides.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class IntroSlidesComponent implements OnInit {
  currentStep = 0;

  slidesData = [
    {
      title: 'Apprentissage en ligne',
      description: "Nous vous proposons des cours en ligne avec des supports numériques, vidéos, exercices et bien d'autres encore",
      img: 'assets/icon/MonFaxLogo.png',
    },
    {
      title: 'Apprenez à tout moment',
      description: 'Vous pouvez consulter vos documents lorsque vous le souhaitez et apprendre à votre rythme',
      img: 'assets/icon/intro-1.png',
    },
    {
      title: 'Evaluer vos connaissances',
      description: 'Nous vous proposons plusieurs exercices avec leurs corrections.',
      img: 'assets/icon/intro-2.png',
    },
  ];
  
  constructor(private router: Router) {}

  ngOnInit() {}

  nextStep() {
    if (this.currentStep < this.slidesData.length - 1) {
      this.currentStep++;
    } else {
      this.skip();
    }
  }

  isLastStep() {
    return this.currentStep === this.slidesData.length - 1;
  }

  skip() {
    localStorage.setItem('introSeen', 'true');
    this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
  }

}
