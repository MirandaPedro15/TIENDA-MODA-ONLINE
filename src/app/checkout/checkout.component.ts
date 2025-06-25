import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  nombre: string = '';
  direccion: string = '';
  metodoEnvio: string = 'delivery';
  confirmado = false;
  pedidoId = '';

  constructor(public cartService: CartService, private router: Router) {}

    pagar() {
    if (!this.nombre || !this.direccion) {
      alert('Por favor completa todos los campos');
      return;
    }

    this.pedidoId = Math.floor(Math.random() * 90000 + 10000).toString();
    this.confirmado = true;
    this.cartService.clearCart();
    }
   backToMain(){
    console.log('Go a Main')
    this.router.navigate(['/PaginaMain'])
  }

}
