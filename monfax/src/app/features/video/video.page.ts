import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { ScreenOrientation } from '@capacitor/screen-orientation';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
  standalone:true,
  imports:[
    IonicModule,
    CommonModule,
  ]
})
export class VideoPage implements OnInit {

videoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {
    const id = 'dQw4w9WgXcQ';
    const youtubeEmbedLink = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl( youtubeEmbedLink);
    this.lockLandscape();
  }
  async lockLandscape() {
    try {
      await ScreenOrientation.lock({ orientation: 'landscape' });
    } catch (err) {
      console.warn('Impossible de forcer l’orientation:', err);
    }
  }

  async resetPortrait() {
    try {
      await ScreenOrientation.lock({ orientation: 'portrait' });
    } catch (err) {
      console.warn('Impossible de remettre en portrait:', err);
    }
  }
  ngOnDestroy(): void {
    this.resetPortrait();
  }

  ngOnInit() {
  }

}
