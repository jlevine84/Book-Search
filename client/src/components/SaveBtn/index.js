import React from "react"

function SaveBtn(props) {
  return (
    <button className="save-btn btn btn-success ml-1" {...props} role="button" tabIndex="0">Save</button>
  );
}

export default SaveBtn;
