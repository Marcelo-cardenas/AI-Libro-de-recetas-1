
import { Component } from '@angular/core';

@Component({
  selector: 'app-buscar-receta',
  templateUrl: './buscar-receta.page.html',
  styleUrls: ['./buscar-receta.page.scss'],
})
export class BuscarRecetaPage {
  webPageUrl: string = 'https://www.recetasgratis.net'; // URL de la página web

  constructor() {}
}
