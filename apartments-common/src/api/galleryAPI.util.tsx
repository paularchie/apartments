import axios from 'axios';

import { Image } from '../models/Image.type';
import { config } from '../config/config.dev';

const endPoint = config.endPoint + '/images'; 

export const getImages = async () => {
    try {
        return await axios.get(endPoint);
    } catch (err) {
        throw new Error(err);
    }
};

export const deleteImages = async (imagesToDelete: Image[]) => {
    return axios.delete(endPoint, { data: { images: imagesToDelete } });
};

export const uploadImages = async (images: FormData) => {
    const options = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    return axios.post(endPoint, images, options);
};

export default {
    getImages,
    deleteImages,
    uploadImages
};