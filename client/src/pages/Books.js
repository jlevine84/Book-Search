import React from "react";
import API from "../utils/API";
import GoogleApi from '../utils/GoogleApi'
import BookSearch from "../components/BookSearch/BookSearch";
import Results from "../components/Results/Results"
import RenderBooks from '../components/RenderBooks/RenderBooks'

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

  saveBook = event => {
    let book = {}
    book.author = event.target.getAttribute('author')
    book.title = event.target.getAttribute('title')
    book.image = event.target.getAttribute('image')
    book.description = event.target.getAttribute('description')
    API.saveBook(book)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      query: value
    });
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
        book.image = (res.data.items[i].volumeInfo.imageLinks && res.data.items[i].volumeInfo.imageLinks.thumbnail) 
        ? res.data.items[i].volumeInfo.imageLinks.thumbnail 
        : 'http://placehold.it/300x300'
        book.description = res.data.items[i].volumeInfo.description
        searchResults.push(book)
      }
      this.setState({books: searchResults})
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
              <RenderBooks
                key={i}
                saveOrDelete={"save"}
                author={book.author}
                link={book.link}
                title={book.title}
                image={book.image}
                description={book.description}
                saveBook={this.saveBook.bind(this)}
              />
            ))
          }          
        </Results>
      </div>
    );
  }
}

export default Books;