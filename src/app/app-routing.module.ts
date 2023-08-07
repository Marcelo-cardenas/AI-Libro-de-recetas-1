import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'buscar-receta',
    loadChildren: () => import('./buscar-receta/buscar-receta.module').then( m => m.BuscarRecetaPageModule)
  },
  {
    path: 'comida-vegana',
    loadChildren: () => import('./comida-vegana/comida-vegana.module').then( m => m.ComidaVeganaPageModule)
  },
  {
    path: 'compartir-recetas',
    loadChildren: () => import('./compartir-recetas/compartir-recetas.module').then( m => m.CompartirRecetasPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'postres-veganos',
    loadChildren: () => import('./postres-veganos/postres-veganos.module').then( m => m.PostresVeganosPageModule)
  },
  {
    path: 'reposteria-cine',
    loadChildren: () => import('./reposteria-cine/reposteria-cine.module').then( m => m.ReposteriaCinePageModule)
  },
  {
    path: 'sabor-cine',
    loadChildren: () => import('./sabor-cine/sabor-cine.module').then( m => m.SaborCinePageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./terminos/terminos.module').then( m => m.TerminosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
