import React from 'react';

import './Gallery.scss';
import { Image } from "../../models/Image.type";
import { GalleryProps } from "../../models/Gallery.type";
import { GalleryItem } from '../GalleryItem/GalleryItem';

const Gallery = ({ images, imageClickHandler }: GalleryProps): JSX.Element => {
    return (
        <ul className="image-list">
            {images.map((image: Image) => (
                <GalleryItem
                    image={image}
                    handleImageClick={() => imageClickHandler(image)}
                    key={image.id}
                />
            ))}
        </ul>
    )
}

export default Gallery;