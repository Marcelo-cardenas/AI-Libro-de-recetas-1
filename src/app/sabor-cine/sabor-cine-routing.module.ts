import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaborCinePage } from './sabor-cine.page';

const routes: Routes = [
  {
    path: '',
    component: SaborCinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaborCinePageRoutingModule {}
