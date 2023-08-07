import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompartirRecetasPageRoutingModule } from './compartir-recetas-routing.module';

import { CompartirRecetasPage } from './compartir-recetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompartirRecetasPageRoutingModule
  ],
  declarations: [CompartirRecetasPage]
})
export class CompartirRecetasPageModule {}