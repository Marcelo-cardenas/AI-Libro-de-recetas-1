import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostresVeganosPageRoutingModule } from './postres-veganos-routing.module';

import { PostresVeganosPage } from './postres-veganos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostresVeganosPageRoutingModule
  ],
  declarations: [PostresVeganosPage]
})
export class PostresVeganosPageModule {}
