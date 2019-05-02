import React from "react";
import API from "../utils/API";
import GoogleApi from '../utils/GoogleApi'
import BookSearch from "../components/BookSearch/BookSearch";
import Results from "../components/Results/Results"
import RenderBook from '../components/RenderBook/RenderBook'

const styles = {
  alignment: {
    textAlign: "center"
  }
}

class Books extends React.Component {
  state = {
    books: [],
    query: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data.books, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      query: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  searchBook = event => {
    event.preventDefault()
    const searchQuery = this.state.query
    GoogleApi.search(searchQuery).then(res => {
      const searchResults = []
      for (let i = 0; i < res.data.items.length; i++) {
        let book = {}
        book.author = res.data.items[i].volumeInfo.authors[0]
        book.link = res.data.items[i].volumeInfo.infoLink
        book.title = res.data.items[i].volumeInfo.title
        book.image = res.data.items[i].volumeInfo.imageLinks.thumbnail
        book.description = res.data.items[i].volumeInfo.description
        searchResults.push(book)
      }
      this.setState({books: searchResults})
      console.log(this.state.books)
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <BookSearch
          searchBook={this.searchBook}
          handleInputChange={this.handleInputChange}
          query={this.state.query}
        />
        <Results>
          {this.state.books.length === 0 ? <h1 style={styles.alignment}>Search for a Book!</h1> : 
            this.state.books.map((book,i) => (
              <RenderBook
                key={i}
                author={book.author}
                link={book.link}
                title={book.title}
                image={book.image}
                description={book.description}
              />
            ))
          }          
        </Results>
      </div>
    );
  }
}

export default Books;