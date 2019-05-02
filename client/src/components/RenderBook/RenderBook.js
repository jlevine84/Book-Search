import React from 'react'
import './RenderBook.css'

function RenderBook(props) {
  return (
    <div className="container bookitem">
      <div className="row booktop">
        <div className="col-9 bookinfo">
          <p><strong>{props.title}</strong></p>
          <p>Written by: {props.author}</p>
        </div>
        <div className="col-3 bookbtns">
          <button className="btn btn-primary" href={props.link}>View</button>
          <button className="btn btn-secondary">Save</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-12 bookbottom">
          <img className="bookimg" alt={props.title} src={props.image}></img>
          <p className="booksummary">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default RenderBook