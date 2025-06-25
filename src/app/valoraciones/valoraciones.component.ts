import { Component, Input, OnInit } from '@angular/core';
import { ValoracionService } from '../valoracion.service';
import { Valoracion } from '../interfaces/valoracion.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-valoraciones',
  imports: [CommonModule, FormsModule],
  templateUrl: './valoraciones.component.html',
  styleUrl: './valoraciones.component.scss'
})
export class ValoracionesComponent {
 @Input() productoId!: number;

  valoraciones: Valoracion[] = [];
  nuevaValoracion: Valoracion = {
    productoId: 0,
    nombreCliente: '',
    estrellas: 5,
    comentario: '',
    fecha: new Date()
  };

  constructor(private valoracionService: ValoracionService) {}

  ngOnInit(): void {
    this.cargarValoraciones();
  }

  cargarValoraciones() {
    this.valoraciones = this.valoracionService.getValoracionesPorProducto(this.productoId);
  }

  enviarValoracion() {
    if (!this.nuevaValoracion.nombreCliente || !this.nuevaValoracion.comentario) {
      alert('Debes completar tu nombre y comentario');
      return;
    }

    this.nuevaValoracion.productoId = this.productoId;
    this.nuevaValoracion.fecha = new Date();
    this.valoracionService.guardarValoracion(this.nuevaValoracion);

    this.nuevaValoracion = {
      productoId: this.productoId,
      nombreCliente: '',
      estrellas: 5,
      comentario: '',
      fecha: new Date()
    };

    this.cargarValoraciones();
  }
}
