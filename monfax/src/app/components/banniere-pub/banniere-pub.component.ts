import { Component, Input, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-banniere-pub',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './banniere-pub.component.html',
  styleUrls: ['./banniere-pub.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class BannierePubComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() autoplay: boolean = true;
  @Input() height: string = '220px';

  constructor() {}

  ngOnInit(): void {}
}
