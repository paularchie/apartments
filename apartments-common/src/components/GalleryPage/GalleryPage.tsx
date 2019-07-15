import React, { useEffect, useState, useRef } from 'react';

import Gallery from '../Gallery/Gallery';
import FileInput from '../FileInput/FileInput';
import Button from '../Button/Button';
import useGalleryStateHandler from './GalleryStateHandler';

const GalleryPage = () => {

    const {
        images,
        handleFileInputChange,
        handleDeleteButtonClick,
        handleImageClick
    } = useGalleryStateHandler();
    
    const showDeleteButton = (): boolean => {
        return !!images.find(image => image.selected);
    }

    return (
        <>
            <FileInput
                handleFileInputChange={handleFileInputChange}
                multiple
                allowedExtensions={['.png', '.jpeg']}
            />
            <Gallery
                images={images}
                imageClickHandler={handleImageClick}
            />
            <Button
                text="Delete"
                clickHandler={handleDeleteButtonClick}
                isDisabled={!showDeleteButton()}
            />
        </>
    )
}

export default GalleryPage;