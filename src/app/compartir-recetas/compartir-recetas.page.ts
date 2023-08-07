import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compartir-recetas',
  templateUrl: './compartir-recetas.page.html',
  styleUrls: ['./compartir-recetas.page.scss'],
})
export class CompartirRecetasPage implements OnInit {

  selectedImage: string | undefined;

  constructor() { }

  ngOnInit() {
  }

  onImageSelected(event: any) {
    // Aquí puedes manejar la selección de imágenes y asignar la imagen a la propiedad selectedImage
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadImage() {
    
    if (this.selectedImage) {
      console.log('Subir imagen:', this.selectedImage);
      
    } else {
      console.log('No se ha seleccionado ninguna imagen.');
    }
  }
}
