import React from 'react'
import './RenderBook.css'

function RenderNewBook(props) {
  return (
    <div className="container bookitem">
      <div className="row booktop">
        <div className="col-9 bookinfo">
          <h5><strong>{props.title}</strong></h5>
          <p>Written by: {props.author}</p>
        </div>
        <div className="col-3 bookbtns">
          <button 
            className="btn btn-success"
            author={props.author}
            title={props.title}
            description={props.description}
            image={props.image}
            onClick={props.saveBook}
            >
          Save
          </button>
          <a href={props.link} className="view"><button className="btn btn-primary">View</button></a>
          {!props.delete === null ? <button className="btn btn-danger">Delete</button>: ""}
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

export default RenderNewBook