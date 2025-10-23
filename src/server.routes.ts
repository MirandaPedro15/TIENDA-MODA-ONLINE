import { provideServerRouting, RenderMode } from '@angular/ssr';

export const serverRoutes = provideServerRouting([
  {
    path: 'PaginaMain',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'Login', 
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'Carrito',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'checkout',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'producto/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
]);