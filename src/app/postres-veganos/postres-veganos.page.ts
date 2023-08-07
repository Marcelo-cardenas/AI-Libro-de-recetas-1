import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postres-veganos',
  templateUrl: './postres-veganos.page.html',
  styleUrls: ['./postres-veganos.page.scss'],
})
export class PostresVeganosPage implements OnInit {
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
