import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LaunchScreenComponent } from './features/launch-screen/launch-screen.component';
import { IntroSlidesComponent } from './features/intro-slides/intro-slides.component';
import { FillProfilComponent } from './features/fill-profil/fill-profil.component';
import { CategoriePageComponent } from './features/categorie-page/categorie-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'launch',
    pathMatch: 'full'
  },
  {
    path: 'launch',
    component: LaunchScreenComponent
  },
  {
    path: 'intro',
    component: IntroSlidesComponent
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./features/auth/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'fill-profil',
    component: FillProfilComponent
  },
  {
    path: 'categorie-page',
    component: CategoriePageComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
