import { Application } from 'express';
import { galleryRoutes } from './gallery.routes';

export function routes(app: Application) {

    galleryRoutes(app);

}

