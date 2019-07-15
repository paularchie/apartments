import { Image } from "./Image.type";

export type GalleryItemProps = {
    image: Image;
    handleImageClick: (image: Image) => void;
}