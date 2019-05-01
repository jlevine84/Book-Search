import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
// import { List, ListItem } from "../components/List";

class Saved extends Component {
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
      <Container fluid>
        <Row>
          <Col size="md-12">
              <h1>
                Saved Books
              </h1>
              )}
          </Col>
        </Row>
      
       
      </Container>
    );
  }
}

export default Saved;
