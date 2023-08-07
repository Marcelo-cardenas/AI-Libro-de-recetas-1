import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComidaVeganaPageRoutingModule } from './comida-vegana-routing.module';

import { ComidaVeganaPage } from './comida-vegana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidaVeganaPageRoutingModule
  ],
  declarations: [ComidaVeganaPage]
})
export class ComidaVeganaPageModule {}
