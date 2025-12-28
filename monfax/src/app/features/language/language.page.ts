import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule,FormsModule]
})
export class LanguagePage implements OnInit {
  selectedLang: string = 'fr';

  constructor() { }

  ngOnInit() {
  }

}
