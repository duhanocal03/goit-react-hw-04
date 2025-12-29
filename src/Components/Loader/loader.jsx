import { ThreeDots } from "react-loader-spinner";
import s from "./loader.module.css";

const Loader = () => (
  <div className={s.loader}>
    <ThreeDots color="#3f51b5" height={80} width={80} />
  </div>
);

export default Loader;