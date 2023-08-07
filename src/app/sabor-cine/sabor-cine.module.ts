import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaborCinePageRoutingModule } from './sabor-cine-routing.module';

import { SaborCinePage } from './sabor-cine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaborCinePageRoutingModule
  ],
  declarations: [SaborCinePage]
})
export class SaborCinePageModule {}
