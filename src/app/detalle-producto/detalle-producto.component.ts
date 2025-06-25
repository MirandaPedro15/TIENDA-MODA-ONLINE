import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/producto.model';
import { ProductoService } from '../producto.service';
import { CartService } from '../cart.service';
import { ValoracionesComponent } from "../valoraciones/valoraciones.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detalle-producto',
  imports: [ValoracionesComponent, FormsModule, CommonModule],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.scss'
})
export class DetalleProductoComponent {
  producto: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductoService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productService.getAll().find(p => p.id === id);
  }

  agregarAlCarrito() {
    if (this.producto) {
      this.cartService.addToCart(this.producto);
      alert('Producto añadido al carrito');
    }
  }
}
