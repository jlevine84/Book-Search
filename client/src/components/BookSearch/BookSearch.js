import React from 'react'
import './booksearch.css'

function BookSearch() {
  return (
    <div className="container booksearch">
      <form>
        <div className="form-group searchinput">
          <input 
          type="text"
          className="form-control"
          name="searchInput"
          placeholder="Search for a Book!"
          />
        </div>
        <button type="submit" class="btn btn-success searchbtn">Search</button>
      </form>
    </div>
  )
}

export default BookSearch