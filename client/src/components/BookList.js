import React, { Component } from "react";

class BookList extends Component {
  render() {
    const books = this.props.books;
    console.log(books);
    const bookItems = books.map((book) => {
      return (
        <div key={book.id}>
          <li>{book.title}</li>
          <li>{book.genre}</li>
          <li>{book.publisher}</li>
          <li>{book.year}</li>
          <li>
            <img src={book.imageURL} alt="" />
          </li>
        </div>
      );
    });

    return (
      <div>
        <h1>BookList</h1>
        <ul>{bookItems}</ul>
      </div>
    );
  }
}

export default BookList;
