import { Injectable } from '@angular/core';
import { Valoracion } from './interfaces/valoracion.model';
@Injectable({
  providedIn: 'root'
})
export class ValoracionService {
  constructor() { }
    private STORAGE_KEY = 'valoraciones';

  getValoracionesPorProducto(productoId: number): Valoracion[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    const valoraciones: Valoracion[] = data ? JSON.parse(data) : [];
    return valoraciones.filter(v => v.productoId === productoId);
  }

  guardarValoracion(valoracion: Valoracion): void {
    const data = localStorage.getItem(this.STORAGE_KEY);
    const valoraciones: Valoracion[] = data ? JSON.parse(data) : [];
    valoraciones.push(valoracion);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(valoraciones));
  }
}
