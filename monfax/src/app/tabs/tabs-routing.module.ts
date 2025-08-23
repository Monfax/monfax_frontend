import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../home/home.page').then(m => m.HomePage) 
      },
      {
        path: 'mes-cours',
        loadComponent: () => import('../mes-cours/mes-cours.page').then(m => m.MesCoursPage) 
      },
      {
        path: 'cours',
        loadComponent: () => import('../cours/cours.page').then(m => m.CoursPage)
      },
      {
        path:'account',
        loadComponent:()=>import ('../account/account.page').then(m => m.AccountPage)
      }
      ,
      {
        path: 'mon-bord',
        loadComponent: () => import('../mon-bord/mon-bord.page').then( m => m.MonBordPage)
      },
      {
        path: 'tabs',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'tabs',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
