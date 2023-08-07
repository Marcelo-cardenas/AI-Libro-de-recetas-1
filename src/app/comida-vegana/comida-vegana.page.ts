import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comida-vegana',
  templateUrl: './comida-vegana.page.html',
  styleUrls: ['./comida-vegana.page.scss'],
})
export class ComidaVeganaPage implements OnInit {
  showRecipe: boolean = false;
  showPreparation: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleRecipe() {
    this.showRecipe = !this.showRecipe;
    this.showPreparation = false;
  }

  togglePreparation() {
    this.showPreparation = !this.showPreparation;
    this.showRecipe = false;
  }
}

