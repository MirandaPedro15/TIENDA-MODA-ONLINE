import { Component } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  carrito: CartItem[] = [];

  constructor( public cartService: CartService, private router: Router){
    this.carrito = this.cartService.getItems();
  }

  eliminar(id:number){
    this.cartService.removeFromCart(id);
    this.carrito = this.cartService.getItems();
  }

  total(): number {
    return this.cartService.getTotal();
  }

  backToMain(){
    this.router.navigate(['/PaginaMain'])
  }

  goToCheckout(){
    this.router.navigate(['/checkout'])
  }
}
