import { Application } from 'express';

import { getMulter } from '../middlewares/file-upload';
import galleryController from '../controllers/gallery';

export const galleryRoutes = (app: Application) => {

    const multer = getMulter().array('images', 50);

    app.route('/api/images').get(galleryController.getImages);
    app.route('/api/images').post(multer, galleryController.saveImages);
    app.route('/api/images').delete(galleryController.deleteImages);
}

