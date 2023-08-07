import style from "./style.module.scss";
import bind from "../../styles/cx";

const cx = bind(style);

function Menu() {
  return (
    <div className={cx(style.menuWrapper)}>
      <div className={cx(style.menuContent)}>
        <p>Completed</p>
        <div className={cx(style.filterButton)} />
      </div>
      <div className={cx(style.menuContent)}>
        <p className={cx(style.deleteText)}>All To do Delete</p>
      </div>
      <div className={cx(style.menuContent)}>
        <p className={cx(style.deleteText)}>Sign Out</p>
      </div>
    </div>
  );
}

export default Menu;
