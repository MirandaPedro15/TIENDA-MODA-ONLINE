// src/app/core/services/cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from './../app/interfaces/producto.model';

export interface CartItem {
  producto: Product;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carrito: CartItem[] = [];

  getItems(): CartItem[] {
    return this.carrito;
  }

  addToCart(producto: Product): void {
    const existente = this.carrito.find(item => item.producto.id === producto.id);
    if (existente) {
      existente.cantidad += 1;
    } else {
      this.carrito.push({ producto, cantidad: 1 });
    }
  }

  removeFromCart(id: number): void {
    this.carrito = this.carrito.filter(item => item.producto.id !== id);
  }

  clearCart(): void {
    this.carrito = [];
  }

  getTotal(): number {
    return this.carrito.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
  }
}
