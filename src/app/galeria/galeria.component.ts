import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../services/galeria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  filteredImages: any[] = [];
  selectedImage: any = null;

  showDetails(image: any): void {
    this.selectedImage = image;
  }
  
  closeDetails(): void {
    this.selectedImage = null;
  }
  
  filterByCategory(event: Event): void {
    // Evento es un HTMLSelectElement
    const selectElement = event.target as HTMLSelectElement;
    
    // Obtén el valor seleccionado
    const selectedCategory = selectElement.value;

    // Implementa la lógica para filtrar las imágenes por categoría
    this.filteredImages = this.filteredImages.filter(image => image.category === selectedCategory);
  }
  
  

  images: any[] = [];

  constructor(private galeriaService: GaleriaService) {}

  ngOnInit(): void {
    this.galeriaService.getImages().subscribe((data: any[]) => {
      this.images = data.map(image => ({
        url: image.urls.small,
        title: image.description || 'Imagen de Unsplash',
        description: image.alt_description || 'Sin descripción',
        category: 'nature' 
      }));
      this.filteredImages = this.images; // Inicialmente muestra todas las imágenes
    });
  }
  
}
