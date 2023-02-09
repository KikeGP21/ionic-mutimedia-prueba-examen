import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  // 3º Redireccionar siempre a list-concats
  {
    path: '',
    redirectTo: 'list-concats',
    pathMatch: 'full'
  },
  {
    path: 'list-concats',
    loadChildren: () => import('./pages/list-concats/list-concats.module').then( m => m.ListConcatsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
