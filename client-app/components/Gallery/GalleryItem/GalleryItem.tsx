import { GalleryItemProps } from "../../../models/GalleryItemProps.type";

export const GalleryItem = ({ image, handleImageClick }: GalleryItemProps): JSX.Element => {

    const classes = ['image-container'];

    if (image.selected) {
        classes.push('selected');
    }

    return (
        <li className={classes.join(' ')}>
            <img src={`http://localhost:4000/${image.path}`} />
            <div
                className="overlay"
                onClick={() => handleImageClick(image)}
            ></div>
        </li>
    )
}