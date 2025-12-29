
import ImageCard from "../ImageCard/ImageCard";
import s from "./imageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => (
  <ul className={s.gallery}>
    {items.map((item) => (
      <li key={item.id}>
        <ImageCard data={item} onClick={onImageClick} />
      </li>
    ))}
  </ul>
);
export default ImageGallery;

/* imageGallery.module.css */
