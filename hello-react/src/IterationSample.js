import React, { useState } from "react";

const IterationSample = () => {
  // const [상태 값 저장 변수, 상태 값 갱신 함수] = useState(상태 초기 값);
  const [names, setNames] = useState([
    { id: 1, text: "a" },
    { id: 2, text: "b" },
    { id: 3, text: "c" },
    { id: 4, text: "d" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = (e) => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });

    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>add</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
