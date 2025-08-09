import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('../tab1/tab1.page').then(m => m.Tab1Page) // ← ici loadComponent
      },
      {
        path: 'tab2',
        loadComponent: () => import('../tab2/tab2.page').then(m => m.Tab2Page) // pareil pour les autres
      },
      {
        path: 'tab3',
        loadComponent: () => import('../tab3/tab3.page').then(m => m.Tab3Page)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] // tu avais oublié ça
})
export class TabsPageRoutingModule {}
