import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  // API de Unsplash con Access Key
  private apiUrl = 'https://api.unsplash.com/photos?client_id=udGYCMrISmRllx50Z14ZDqfDnkcWVIDft4kGs53gAJI';

  constructor(private http: HttpClient) {}

  getImages(): Observable<any> {
    return this.http.get(this.apiUrl); // Devuelve las imágenes desde Unsplash
  }
}
