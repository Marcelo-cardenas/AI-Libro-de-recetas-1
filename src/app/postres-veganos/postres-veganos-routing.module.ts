import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostresVeganosPage } from './postres-veganos.page';

const routes: Routes = [
  {
    path: '',
    component: PostresVeganosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostresVeganosPageRoutingModule {}
