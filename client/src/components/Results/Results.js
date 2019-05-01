import React from 'react'
import './results.css'

function Results(props) {
  return (
    <div className="container results-container">
      {props.children}
    </div>
  )
}

export default Results