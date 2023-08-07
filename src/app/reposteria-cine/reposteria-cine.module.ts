import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReposteriaCinePageRoutingModule } from './reposteria-cine-routing.module';

import { ReposteriaCinePage } from './reposteria-cine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReposteriaCinePageRoutingModule
  ],
  declarations: [ReposteriaCinePage]
})
export class ReposteriaCinePageModule {}
