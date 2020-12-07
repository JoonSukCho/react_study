import { createStore } from "redux";

// createStore는 스토어를 만드는 함수
// 리액트 프로젝트에서는 단 하나의 스토어를 만듦.

// 리덕스에서 관리 할 상태 정의
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// Action type 정의
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// Action 생성 함수 정의
const increase = () => ({
  type: INCREASE,
});

// Action 생성 함수 정의
const decrease = () => ({
  type: DECREASE,
});

// Action 생성 함수 정의
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

// Action 생성 함수 정의
const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// 리듀서 만들기
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만든다.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "DECREASE":
      return {
        ...state,
        counter: state.counter - 1,
      };

    case "CHANGE_TEXT":
      return {
        ...state,
        text: action.text,
      };

    case "ADD_TO_LIST":
      return {
        ...state,
        list: state.list.concat(action.item),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회.

// 스토어 안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe 호출.

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("Hello"));
store.dispatch(addToList(["123"]));

const exercise = () => {
  return <div></div>;
};

export default exercise;
