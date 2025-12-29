import s from "./loadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <button className={s.button} onClick={onClick} type="button">
    Load more
  </button>
);

export default LoadMoreBtn;