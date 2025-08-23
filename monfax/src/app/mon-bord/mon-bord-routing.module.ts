import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonBordPage } from './mon-bord.page';

const routes: Routes = [
  {
    path: '',
    component: MonBordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonBordPageRoutingModule {}
