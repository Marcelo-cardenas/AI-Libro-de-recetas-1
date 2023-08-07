import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReposteriaCinePage } from './reposteria-cine.page';

const routes: Routes = [
  {
    path: '',
    component: ReposteriaCinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReposteriaCinePageRoutingModule {}
