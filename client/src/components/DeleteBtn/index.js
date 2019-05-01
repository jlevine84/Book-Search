import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <span className="delete-btn btn btn-danger ml-1" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
