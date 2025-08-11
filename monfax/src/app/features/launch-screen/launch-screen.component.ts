import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-launch-screen',
  templateUrl: './launch-screen.component.html',
  styleUrls: ['./launch-screen.component.scss'],
  standalone: true,
  imports:[IonicModule,CommonModule]
})
export class LaunchScreenComponent  implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {

    setTimeout(()=>{
      this.router.navigateByUrl('/intro',{replaceUrl:true})
    },2500)

  }

}
