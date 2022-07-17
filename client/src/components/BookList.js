import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = () => {
    fetch(`http://localhost:8080/${userId}`)
      .then((response) => response.json())
      .then((books) => {
        setBooks(books);
      });
  };

  const handleBookDelete = (bookId) => {
    fetch(`http://localhost:8080/${bookId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          getAllBooks();
        }
      });
  };

  const bookItems = books.map((book) => {
    return (
      <div
        className="card text-dark"
        style={{
          maxWidth: "16em",
          minWidth: "16em",
          padding: "2em",
          margin: "2em",
          backgroundColor: "none",
        }}
        key={book.id}
      >
        <li>
          <b>{book.title}</b>
        </li>
        <li>
          <b>Genre:</b> {book.genre}
        </li>
        <li>
          <b>Author:</b> {book.publisher}
        </li>
        <li>{book.year}</li>
        <li>
          <img className="img-sm" src={book.imageURL} alt="" />
        </li>
        <button
          className="btn btn-dark"
          onClick={() => handleBookDelete(book.id)}
          style={{
            margin: "2em",
          }}
        >
          Delete Book
        </button>
      </div>
    );
  });
  return <ul style={{ display: "flex" }}>{bookItems}</ul>;
}

export default BookList;
