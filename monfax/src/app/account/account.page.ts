import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { User, userMock } from '../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule]
})
export class AccountPage implements OnInit {
  current_user:User=userMock[0]

  constructor(private router: Router) {}
  goTo(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit() {
  }

}
