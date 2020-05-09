import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'elegir',
    loadChildren: () => import('./paginas/elegir/elegir.module').then( m => m.ElegirPageModule)
  },
  {
    path: 'casa-linda',
    loadChildren: () => import('./casa-linda/casa-linda.module').then( m => m.CasaLindaPageModule)
  },
  {
    path: 'casas-lindas',
    loadChildren: () => import('./paginas/casas-lindas/casas-lindas.module').then( m => m.CasasLindasPageModule)
  },
  {
    path: 'casas-feas',
    loadChildren: () => import('./paginas/casas-feas/casas-feas.module').then( m => m.CasasFeasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
