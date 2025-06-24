import { Injectable } from '@angular/core';
import { Product } from './interfaces/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
constructor() { }
private productos: Product[] = [
 {
    id: 1,
    nombre: 'Polo Básico Hombre',
    categoria: 'Hombre',
    precio: 49.9,
    imagen: 'https://i.imgur.com/placeholder4.png',
    descripcion: 'Polo de algodón 100%',
    stock: 10
  },
  {
    id: 2,
    nombre: 'Blusa Manga Corta',
    categoria: 'Mujer',
    precio: 59.9,
    imagen: 'https://i.imgur.com/placeholder4.png',
    descripcion: 'Blusa fresca para verano',
    stock: 8
  },
  {
    id: 3,
    nombre: 'Short Deportivo Niño',
    categoria: 'Niños',
    precio: 39.9,
    imagen: 'https://i.imgur.com/placeholder4.png',
    descripcion: 'Cómodo para jugar',
    stock: 12
  },
  {
    id: 4,
    nombre: 'Camisa de Vestir Slim Fit',
    categoria: 'Hombre',
    precio: 79.9,
    imagen: 'https://i.imgur.com/placeholder4.png', // Placeholder
    descripcion: 'Ideal para ocasiones formales y casuales elegantes.',
    stock: 7
  },
  {
    id: 5,
    nombre: 'Pantalón Jean Clásico',
    categoria: 'Hombre',
    precio: 69.9,
    imagen: 'https://i.imgur.com/placeholder5.png', // Placeholder
    descripcion: 'Jean de corte recto, versátil para el día a día.',
    stock: 15
  },
  {
    id: 6,
    nombre: 'Chompa de Lana Tejida',
    categoria: 'Hombre',
    precio: 89.9,
    imagen: 'https://i.imgur.com/placeholder6.png', // Placeholder
    descripcion: 'Cálida y cómoda para el invierno.',
    stock: 5
  },
  {
    id: 7,
    nombre: 'Short de Baño Estampado',
    categoria: 'Hombre',
    precio: 45.9,
    imagen: 'https://i.imgur.com/placeholder7.png', // Placeholder
    descripcion: 'Diseño moderno para la playa o piscina.',
    stock: 11
  },
  {
    id: 8,
    nombre: 'Vestido Floral de Verano',
    categoria: 'Mujer',
    precio: 99.9,
    imagen: 'https://i.imgur.com/placeholder8.png', // Placeholder
    descripcion: 'Ligero y con estampado vibrante, perfecto para el calor.',
    stock: 6
  },
  {
    id: 9,
    nombre: 'Blusa de Seda con Lazos',
    categoria: 'Mujer',
    precio: 65.9,
    imagen: 'https://i.imgur.com/placeholder9.png', // Placeholder
    descripcion: 'Elegante y suave al tacto, ideal para un look sofisticado.',
    stock: 9
  },
  {
    id: 10,
    nombre: 'Pantalones Palazzo Casuales',
    categoria: 'Mujer',
    precio: 55.9,
    imagen: 'https://i.imgur.com/placeholder10.png', // Placeholder
    descripcion: 'Amplios y cómodos para un estilo relajado.',
    stock: 13
  },
  {
    id: 11,
    nombre: 'Falda Midi Plisada',
    categoria: 'Mujer',
    precio: 75.9,
    imagen: 'https://i.imgur.com/placeholder11.png', // Placeholder
    descripcion: 'Versátil para looks casuales o más formales.',
    stock: 7
  },
  {
    id: 12,
    nombre: 'Pantalón Deportivo Algodón Niño',
    categoria: 'Niños',
    precio: 35.9,
    imagen: 'https://i.imgur.com/placeholder12.png', // Placeholder
    descripcion: 'Cómodo y resistente para jugar todo el día.',
    stock: 18
  },
  {
    id: 13,
    nombre: 'Camiseta Estampada de Superhéroe',
    categoria: 'Niños',
    precio: 29.9,
    imagen: 'https://i.imgur.com/placeholder13.png', // Placeholder
    descripcion: 'Con diseños divertidos y coloridos para los más pequeños.',
    stock: 20
  },
  {
    id: 14,
    nombre: 'Conjunto de Buzo con Capucha',
    categoria: 'Niños',
    precio: 59.9,
    imagen: 'https://i.imgur.com/placeholder14.png', // Placeholder
    descripcion: 'Ideal para mantenerlos abrigados y cómodos.',
    stock: 10
  },
  {
    id: 15,
    nombre: 'Vestido Casual con Volantes Niña',
    categoria: 'Niños',
    precio: 49.9,
    imagen: 'https://i.imgur.com/placeholder15.png', // Placeholder
    descripcion: 'Lindo y ligero para cualquier ocasión.',
    stock: 14
  }
  ];

   getAll(): Product[] {
    return this.productos;
  }

    getByCategory(cat: string): Product[] {
    return this.productos.filter(p => p.categoria === cat);
  }
}
