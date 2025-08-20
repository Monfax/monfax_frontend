import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesCoursPage } from './mes-cours.page';

const routes: Routes = [
  {
    path: '',
    component: MesCoursPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesCoursPageRoutingModule {}
