import React, { useCallback, useReducer, useState } from "react";
import axios from "axios";
import { useAsync } from "react-async";
import { CircularProgress } from "@material-ui/core";

function reducer(state, action) {
  switch (action.type) {
    case "ADDITEM":
      return { keys: state.keys + 1, value: action.value };
    case "CLEAR":
      return { keys: 0 };
    default:
      return state;
  }
}

async function getData() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

const Home = () => {
  const { data: datas, run } = useAsync({
    deferFn: getData,
  });
  const [state, dispatch] = useReducer(reducer, { keys: 0, value: "" });

  const handleClickSave = (e) => {
    console.log(datas);
    console.log(datas[state.keys]);
    dispatch({ type: "ADDITEM", value: datas[state.keys].name });
    localStorage.setItem(state.keys, datas[state.keys].name);
  };

  const handleClickClear = (e) => {
    localStorage.clear();
    dispatch({ type: "CLEAR" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Home</h1>
      <input placeholder="Get API Data"></input>
      <button
        onClick={() => {
          run();
          console.log(state);
        }}
        style={{ marginLeft: "10px" }}
      >
        Get API Data
      </button>
      <button onClick={handleClickSave} style={{ marginLeft: "10px" }}>
        Save
      </button>
      <button onClick={handleClickClear} style={{ marginLeft: "10px" }}>
        Clear Local Storage
      </button>
    </div>
  );
};

export default Home;
