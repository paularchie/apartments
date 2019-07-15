import { Image } from "./Image.type";

export type GalleryProps = {
    images: Image[],
    imageClickHandler: (image: Image) => void
}