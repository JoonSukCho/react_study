import React, { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      <div>
        <b>name : </b> {name}
      </div>
      <div>
        <b>nickName : </b> {nickname}
      </div>
    </div>
  );
};

export default Info;
