export interface Valoracion {
  productoId: number;
  nombreCliente: string;
  estrellas: number; // 1 a 5
  comentario: string;
  fecha: Date;
}
