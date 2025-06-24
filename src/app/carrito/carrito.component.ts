import { Component } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  carrito: CartItem[] = [];

  constructor( public cartService: CartService){
    this.carrito = this.cartService.getItems();
  }

  eliminar(id:number){
    this.cartService.removeFromCart(id);
    this.carrito = this.cartService.getItems();
  }

  total(): number {
    return this.cartService.getTotal();
  }
}
