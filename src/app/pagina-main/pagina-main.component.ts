import { Component } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Product } from '../interfaces/producto.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Router, RouterModule } from '@angular/router';
import { ValoracionesComponent } from '../valoraciones/valoraciones.component';

@Component({
  selector: 'app-pagina-main',
  imports: [CommonModule, RouterModule],
  templateUrl: './pagina-main.component.html',
  styleUrl: './pagina-main.component.scss'
})
export class PaginaMainComponent {
  productos: Product[] = [];
  categoriaSeleccionada: string = '';

  constructor(
    private productService: ProductoService, 
    private cartService: CartService,
    private router: Router) {}
  ngOnInit(): void {
    this.productos = this.productService.getAll();
  }

  goToCarrito(){
    console.log('Go carrito')
    this.router.navigate(['/Carrito'])
  }

  agregarAlCarrito(p: Product) {
    this.cartService.addToCart(p);
    alert('Producto añadido al carrito');
  }

  filtrarPorCategoria(cat: string) {
    this.categoriaSeleccionada = cat;
    this.productos = this.productService.getByCategory(cat);
  }

  mostrarTodo() {
    this.productos = this.productService.getAll();
    this.categoriaSeleccionada = '';
  }
}
