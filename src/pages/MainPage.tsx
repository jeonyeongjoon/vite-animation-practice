import style from "../styles/pages/main.module.scss";
import bind from "../styles/cx";
import AddToDo from "../components/Add/AddToDo";
import Menu from "../components/Menu/Menu";

const cx = bind(style);

function MainPage() {
  return (
    <div className={cx(style.Wrapper)}>
      <h1>To Do List</h1>
      <AddToDo />
      <Menu />
    </div>
  );
}

export default MainPage;
 