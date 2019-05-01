import React from "react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
import Results from "../components/Results/Results"

class Saved extends React.Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
    .then(res => this.setState({ books: res.data, title: "", author: "", synopsis: "" }))
    .catch(err => console.log(err));
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Results/>
      </div>
    );
  }
}

export default Saved;
