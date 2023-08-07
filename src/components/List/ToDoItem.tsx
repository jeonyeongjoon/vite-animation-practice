import style from "./style.module.scss";
import bind from "../../styles/cx";

const cx = bind(style);

function ToDoItem() {
  return <div className={cx(style.Item)}></div>;
}

export default ToDoItem;
