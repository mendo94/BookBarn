import React, { Component } from "react";
import BookList from "./components/BookList";

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
        <BookList />
      </div>
    );
  }
}

export default App;
