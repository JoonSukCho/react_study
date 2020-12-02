import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;

  const onClick = (e) => {
    alert("??");
  };

  const onChange = () => {
    alert("change");
  };
  return (
    <div>
      <button onClick={onClick}>onClick</button>
      <input onChange={onChange}></input>
    </div>
  );
};

export default EventPractice;
