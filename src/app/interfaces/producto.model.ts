export interface Product {
  id: number;
  nombre: string;
  categoria: 'Hombre' | 'Mujer' | 'Niños';
  precio: number;
  imagen: string;
  descripcion: string;
  stock: number;
}
