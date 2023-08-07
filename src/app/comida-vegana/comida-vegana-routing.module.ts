import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComidaVeganaPage } from './comida-vegana.page';

const routes: Routes = [
  {
    path: '',
    component: ComidaVeganaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidaVeganaPageRoutingModule {}
