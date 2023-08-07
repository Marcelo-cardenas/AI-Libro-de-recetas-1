import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompartirRecetasPage } from './compartir-recetas.page';

const routes: Routes = [
  {
    path: '',
    component: CompartirRecetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompartirRecetasPageRoutingModule {}
