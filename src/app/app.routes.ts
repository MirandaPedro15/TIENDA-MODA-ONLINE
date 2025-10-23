import { Routes } from '@angular/router';
import path from 'path';
import { PaginaMainComponent } from './pagina-main/pagina-main.component';
import { AppComponent } from './app.component';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

export const routes: Routes = [
    { path: 'PaginaMain', component: PaginaMainComponent },
    { path: 'Login', component: PaginaLoginComponent },
    { path: 'Carrito', component: CarritoComponent },
    { path: 'checkout', component: CheckoutComponent },
    { 
        path: 'producto/:id', 
        component: DetalleProductoComponent,
        data: { prerender: false } // Agregar esta línea
    },
    { path: '**', redirectTo: 'Login' }
];
