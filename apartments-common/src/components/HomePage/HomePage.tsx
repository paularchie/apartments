import React, { useState, useEffect } from 'react';
const image1 = require('./stegna_img_1.jpg');
const image2 = require('./stegna_img_2.jpg');
const image3 = require('./stegna_img_3.jpg');
const image4 = require('./gdansk.jpg');

import './HomePage.scss';
import api from '../../api/galleryAPI.util';
import SlideShow from '../SlideShow/SlideShow';
import { SlideShowTypes } from '../SlideShow/enums/SlideShowTypes.enum';
import useGalleryStateHandler from '../GalleryPage/GalleryStateHandler';
import FileInput from '../FileInput/FileInput';
import Gallery from '../Gallery/Gallery';
import Button from '../Button/Button';
import { Image } from '../../models/Image.type';

const apiRoot = 'http://localhost:4000';

const HomePage = () => {
    const {
        images,
        handleFileInputChange,
        handleDeleteButtonClick,
        handleImageClick
    } = useGalleryStateHandler();

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        if (images.length) {
            setSlides(getSlides(images));
        }
    }, [images])

    const getSlides = (images: Image[]) => {
        return images.map(image => {
            return {
                path: `${apiRoot}/${image.path}`
            }
        })
    }

    const showDeleteButton = (): boolean => {
        return !!images.find((image: Image) => image.selected);
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

            {slides.length ? <SlideShow
                slides={slides}
                slideShowType={SlideShowTypes.SlideLeft}
                startWithFadeIn
            /> : null}
        </>
    )
}

export default HomePage;