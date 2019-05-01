import React from 'react'
import './RenderBook.css'

function RenderBook() {
  return (
    <div className="container bookitem">
      <div className="row booktop">
        <div className="col-4 bookinfo">
          <p><strong>Title</strong></p>
          <p>Sub</p>
          <p>Author</p>
        </div>
        <div className="col-8 bookbtns">
          <button className="btn btn-primary">View</button>
          <button className="btn btn-secondary">Save</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col bookbottom">
          <image className="bookimg">bookimage</image>
          <p className="booksummary">booksummary</p>
        </div>
      </div>
    </div>
  )
}

export default RenderBook