import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { serverRoutes } from './server.routes'; // 👈 importar tus rutas de servidor

const bootstrap = () =>
  bootstrapApplication(AppComponent, {
    ...config,
    providers: [
      ...(config.providers || []),
      serverRoutes, // 👈 agregar las rutas del servidor
    ],
  });

export default bootstrap;
