import style from "./style.module.scss";
import bind from "../../styles/cx";

const cx = bind(style);

function List() {
  return <div className={cx(style.List)}></div>;
}

export default List;
