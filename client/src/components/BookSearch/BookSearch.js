import React from 'react'
import './booksearch.css'

function BookSearch(props) {
  return (
    <div className="container booksearch">
      <form>
        <div className="form-group searchinput">
          <input 
          type="text"
          className="form-control"
          placeholder="Search for a Book!"
          onChange={props.handleInputChange}
          value={props.query}
          />
        </div>
        <button 
        type="submit"
        className="btn btn-success searchbtn"
        onClick={props.searchBook}
        >Search</button>
      </form>
    </div>
  )
}

export default BookSearch