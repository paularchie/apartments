import React, { useEffect, useState } from 'react';

import { Image } from '../../models/Image.type';
import api from '../../api/galleryAPI.util';
import { compareObjectArrays } from '../../util/compareObjectArrays';

const useGalleryStateHandler = () => {
    const [images, setImagesState] = useState<Image[]>([]);
    const [imagesToDelete, setImagesToDeleteState] = useState<Image[]>([]);

    useEffect(() => {
        getImages();
    }, []);

    const getImages = async () => {
        const { data } = await api.getImages();
        setImagesState(data);
    }

    async function handleFileInputChange(fileList: FileList) {
        const {data} = await api.uploadImages(getFormData(fileList));
        const storedImages = data.storedImages;
        const updatedImages = [...images, ...storedImages];
        setImagesState(updatedImages);
    }

    function getFormData(fileList: FileList): FormData {
        const formData = new FormData();
        for (let index in fileList) {
            formData.append('images', fileList[index]);
        }
        return formData;
    }

    async function handleDeleteButtonClick() {
        await api.deleteImages(imagesToDelete);
        const imagesAfterDeletion: Image[] = compareObjectArrays(images, imagesToDelete, 'id');
        setImagesState(imagesAfterDeletion);
    }

    function handleImageClick(image: Image): void {
        toggleImageSelectedState(image);
        updateImagesToDelete();
    }

    function toggleImageSelectedState(image: Image): void {
        const updatedImage = images.find(img => img.id === image.id);
        updatedImage.selected = !updatedImage.selected;
        setImagesState(images);
    }

    function updateImagesToDelete(): void {
        const selectedImages = images.filter(image => image.selected);
        setImagesToDeleteState(selectedImages);
    }

    return {
        images,
        handleFileInputChange,
        handleDeleteButtonClick,
        handleImageClick
    }
}

export default useGalleryStateHandler;