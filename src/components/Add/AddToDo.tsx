import style from "./style.module.scss";
import bind from "../../styles/cx";
import { useState } from "react";

const cx = bind(style);

function AddToDo() {
  const [toDoContent, setToDoContent] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDoContent(event.target.value);
  };

  const handleEnterForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (toDoContent === "") {
      alert("내용을 입력해주세요!");
    } else {
      setToDoContent("");
    }
  };

  return (
    <form onSubmit={handleEnterForm}>
      <input
        value={toDoContent}
        type="text"
        onChange={handleInputChange}
        className={cx(style.CreateInput)}
      />
    </form>
  );
}

export default AddToDo;
