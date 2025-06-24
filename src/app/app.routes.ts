import { Routes } from '@angular/router';
import path from 'path';
import { PaginaMainComponent } from './pagina-main/pagina-main.component';
import { AppComponent } from './app.component';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
    {path: 'PaginaMain', component: PaginaMainComponent},
    {path: 'Login', component: PaginaLoginComponent},
    {path: '**', redirectTo: 'Login' },
    {path: 'Carrito', component: CarritoComponent },

];
