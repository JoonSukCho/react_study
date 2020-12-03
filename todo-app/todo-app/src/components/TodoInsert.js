import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";
// import { 아이콘 이름 } from "react-icons/md";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState(null);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(""); // input state(value) 초기화
      e.preventDefault(); // submit 발생 시 브라우저에서 새로고침 방지
    },
    [onInsert, value], // onInsert, value가 바뀌었을 때만 함수 생성
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="Insert To do.."
        value={value || ""}
        onChange={onChange}
      ></input>
      <button type="submit">
        <MdAdd></MdAdd>
      </button>
    </form>
  );
};

export default TodoInsert;
