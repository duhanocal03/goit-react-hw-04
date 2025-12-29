import s from "./imageCard.module.css";

const ImageCard = ({ data, onClick }) => (
  <div className={s.card} onClick={() => onClick(data)}>
    <img src={data.urls.small} alt={data.alt_description} className={s.img} />
  </div>
);
export default ImageCard;