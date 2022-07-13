import React, { Component } from "react";
import BookList from "./components/BookList";
import BookSave from "./components/BookSave";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.fetchAllBooks();
  }

  fetchAllBooks = async () => {
    const response = await fetch("http://localhost:8080/");
    const books = await response.json();
    this.setState({
      books: books,
    });
  };

  render() {
    return (
      <div>
        <BookList books={this.state.books} />
        <BookSave onAdd={this.handleSaveBook} />
      </div>
    );
  }
}

export default App;
