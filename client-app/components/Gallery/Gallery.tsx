import axios from "axios";
import './Gallery.scss';
import { Image } from "../../models/Image.type";
import { useState, useRef } from 'react';
import { compareObjectArrays } from "../../util/compareObjectArrays";
import { GalleryProps } from "../../models/Gallery.type";
import { GalleryItem } from "./GalleryItem/GalleryItem";
import FileInput from "./FileInput/FileInput";

const Gallery = (props: GalleryProps): JSX.Element => {

    const [images, setImagesState] = useState<Image[]>(props.images);
    const [imagesToDelete, setImagesToDeleteState] = useState<Image[]>([]);
    const fileInput = useRef<HTMLInputElement>();

    async function handleFileInputChange(fileList: FileList) {

        // TODO: implement validation
        const url = 'http://localhost:4000/api/images';

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        const response = await axios.post(url, getFormData(fileList), config);
        const storedImages = response.data.storedImages;
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
        await axios.delete(`http://localhost:4000/api/images`, { data: { images: imagesToDelete } });
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

    const showDeleteButton = (): boolean => {
        return !!images.find(image => image.selected);
    }

    const gallery =
        (<ul className="image-list">
            {images.map((image: Image) => (
                <GalleryItem
                    image={image}
                    handleImageClick={handleImageClick}
                    key={image.id}
                />
            ))}
        </ul>);

    return (
        <>
            <FileInput
                inputRef={fileInput}
                handleFileInputChange={handleFileInputChange}
            />

            {gallery}

            {
                showDeleteButton()
                    ? <button onClick={handleDeleteButtonClick}>Delete</button>
                    : null
            }
        </>
    )
}

export default Gallery;