import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdAddCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle, onModify }) => {
  const { id, text, checked } = todo;
  // id = todo.id;

  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? (
          <MdCheckBox></MdCheckBox>
        ) : (
          <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
        )}
        <div className="text">{text}</div>
      </div>
      <div
        className="remove"
        onClick={() => {
          onRemove(id);
        }}
      >
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
