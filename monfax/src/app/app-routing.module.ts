import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LaunchScreenComponent } from './features/launch-screen/launch-screen.component';
import { IntroSlidesComponent } from './features/intro-slides/intro-slides.component';

const routes: Routes = [
  {
    path:'',
    component:LaunchScreenComponent
  },
  {
    path: 'intro',
    component: IntroSlidesComponent
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
