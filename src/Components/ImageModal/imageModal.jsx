import Modal from "react-modal";
import s from "./imageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} /* Boşa tıklandığında kapanır */
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} className={s.bigImg} />
      <div className={s.info}>
        <p>📷 {image.user.name}</p>
        <p>❤️ {image.likes}</p>
      </div>
    </Modal>
  );
};
export default ImageModal;